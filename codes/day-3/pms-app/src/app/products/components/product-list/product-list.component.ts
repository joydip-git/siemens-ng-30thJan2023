import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PRODUCT_SERVICE_TOKEN } from 'src/constants/app-constants';
import { Product } from '../../models/product.model';
import { IProductService } from '../../services/contracts/product.contract';
import { ProductService } from '../../services/product.service';

//@Injectable()
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy {
  allProducts?: Product[];
  loadingDone = false
  errorMessage = ''
  filterText = ''
  private productSubscription?: Subscription;

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private ps: IProductService) {

  }
  updateFilterText(newText: string) {
    this.filterText = newText
  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    this.productSubscription =
      this.ps
        .getAll()
        .subscribe(
          {
            next: (resp) => {
              if (resp.data !== null) {
                this.allProducts = resp.data
                this.errorMessage = ''
                this.loadingDone = true
              }
              else {
                this.allProducts = undefined
                this.errorMessage = resp.message
                this.loadingDone = true
              }
            },
            error: (err: any) => {
              this.allProducts = undefined
              this.errorMessage = err.message
              this.loadingDone = true
            }
          }
        )
  }
}

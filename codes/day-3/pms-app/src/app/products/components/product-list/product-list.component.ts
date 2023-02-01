import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.model';
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
  private productSubscription?: Subscription;

  constructor(private ps: ProductService) {

  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    this.productSubscription =
      this.ps
        .getProducts()
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

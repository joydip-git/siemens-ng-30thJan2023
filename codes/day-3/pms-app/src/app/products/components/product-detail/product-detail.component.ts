import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { PRODUCT_SERVICE_TOKEN } from 'src/constants/app-constants';
import { Product } from '../../models/product.model';
import { IProductService } from '../../services/contracts/product.contract';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product?: Product;
  sub?: Subscription;
  constructor(
    @Inject(PRODUCT_SERVICE_TOKEN) private ps: IProductService,
    private route: ActivatedRoute
  ) {

  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot
    const id = Number(snapshot.params['id'])
    this.sub = this.ps.get(id).subscribe({
      next: (resp) => {
        if (resp.data !== null) {
          this.product = resp.data
        }
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

}

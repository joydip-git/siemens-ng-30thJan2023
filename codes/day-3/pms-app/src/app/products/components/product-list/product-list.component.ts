import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

//@Injectable()
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  allProducts?: Product[];
  loadingDone = false
  errorMessage = ''

  constructor(private ps: ProductService) {

  }
  ngOnInit(): void {
    this.allProducts = this.ps.getProducts()
  }
}

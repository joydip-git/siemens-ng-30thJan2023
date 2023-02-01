import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { productUrl, PRODUCT_SERVICE_TOKEN, PRODUCT_URL_TOKEN } from 'src/constants/app-constants';
import { StarComponent } from '../common-features/compoments/star/star.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const productRoutes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: 'products/add',
    component: AddProductComponent
  }
]

@NgModule({
  declarations: [
    AddProductComponent,
    ProductListComponent,
    FilterProductComponent,
    ProductContainerComponent,
    StarComponent,
    ProductFilterPipe,
    ProductDetailComponent
  ],
  imports: [
    CommonModule, HttpClientModule, RouterModule.forRoot(productRoutes)
  ],
  providers: [
    {
      provide: PRODUCT_URL_TOKEN,
      useValue: productUrl
    },
    {
      provide: PRODUCT_SERVICE_TOKEN,
      useClass: ProductService
    }
    // ProductService
  ],
  exports: [ProductListComponent, StarComponent]
})
export class ProductsModule { }

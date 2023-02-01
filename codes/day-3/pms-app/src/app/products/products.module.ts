import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddProductComponent,
    ProductListComponent,
    FilterProductComponent,
    ProductContainerComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [ProductService],
  exports: [ProductListComponent]
})
export class ProductsModule { }

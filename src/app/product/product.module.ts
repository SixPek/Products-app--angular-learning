import { NgModule } from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductRoutesModule } from './product-routes.module';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    SharedModule,
    ProductRoutesModule
  ],
  exports: [
    ProductComponent,
    ProductDetailsComponent,
    RouterModule
  ]
})
export class ProductModule { }

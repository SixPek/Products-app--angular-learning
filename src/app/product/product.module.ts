import { NgModule } from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductRoutesModule } from './product-routes.module';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    SharedModule,
    ProductRoutesModule
  ],
  exports: [
    ProductComponent,
    RouterModule
  ]
})
export class ProductModule { }

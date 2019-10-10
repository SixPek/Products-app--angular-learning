import { NgModule } from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { RouterModule, Routes } from '@angular/router';


const routes : Routes = [
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProductComponent,
    RouterModule
  ]
})
export class ProductModule { }

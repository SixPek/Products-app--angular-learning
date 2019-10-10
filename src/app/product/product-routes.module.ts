import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';


const routes : Routes = [
    {path: 'products', component:ProductsComponent},
    {path: 'products/:id', component: ProductDetailsComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class ProductRoutesModule{

}
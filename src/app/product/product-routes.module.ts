import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';


const routes : Routes = [
    {path: 'routes', component:ProductsComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class ProductRoutesModule{

}
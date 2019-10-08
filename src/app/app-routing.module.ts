import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: "home", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'contact', component: ContactComponent},
    {path: "", component: HomeComponent, pathMatch:"full"},
    {path: "**", redirectTo: "home", pathMatch: "full"},

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }

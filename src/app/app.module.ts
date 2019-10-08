import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ImageDescriptionComponent } from './components/image-description/image-description.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FilterTextComponent } from './components/filter-text/filter-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    AboutComponent,
    ImageDescriptionComponent,
    ProductComponent,
    ProductsComponent,
    ContactComponent,
    FilterTextComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

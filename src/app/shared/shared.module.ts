import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';


import { BannerComponent } from './components/banner/banner.component';
import { FilterTextComponent } from './components/filter-text/filter-text.component';
import { ImageDescriptionComponent } from './components/image-description/image-description.component';
import { HeaderComponent } from './components/layout/header/header.component';





@NgModule({
  declarations: [
    BannerComponent,
    FilterTextComponent,
    ImageDescriptionComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    BannerComponent,
    FilterTextComponent,
    ImageDescriptionComponent,
    HeaderComponent
  ]
})
export class SharedModule { }

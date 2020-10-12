import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListingComponent
  ],
  imports: [
    ProductRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }

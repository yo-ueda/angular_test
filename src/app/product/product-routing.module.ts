import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListingComponent } from "./product-listing/product-listing.component";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product.component';

const routes: Routes = [

  { path: 'product', component: ProductComponent ,
    children:[
      { path: '', component: ProductListingComponent },
      { path: 'detail/:productId', component: ProductDetailComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }

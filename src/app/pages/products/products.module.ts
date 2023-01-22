import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';


import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule, ProductsRoutingModule,
    MatChipsModule
  ]
})
export class ProductsModule { }

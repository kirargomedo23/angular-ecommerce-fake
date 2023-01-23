import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';


import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { ImageBlankDirective } from '@app/shared/directives/image-blank/image-blank.directive';

@NgModule({
  declarations: [
    ProductsComponent,
    CardComponent,
    SearchComponent,
    ImageBlankDirective
  ],
  imports: [
    CommonModule, ProductsRoutingModule,
    MatChipsModule, MatCardModule
  ]
})
export class ProductsModule { }

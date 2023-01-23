import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from '@app/interfaces/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges  {

  @Input() productList: Product[] = [];

  constructor(

    ){

  }

  ngOnInit(): void {

  }

  ngOnChanges(){
    console.log("productList ngOnChanges: ", this.productList);

  }

}

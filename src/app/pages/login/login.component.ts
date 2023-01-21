import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/services/product/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private p : ProductService ){

  }

  ngOnInit(){
    this.p.getAll().subscribe(data => {
      console.log("datA: ", data);

    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Category } from '@app/interfaces/category';
import { CategoryService } from '@app/services/category/category.service';
import { ProductService } from '@app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categoryList: Category[] = [];

  constructor(
    private readonly productService: ProductService ,
    private readonly categoryService: CategoryService
    ){

  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(){
    this.productService.getAll().subscribe( (data) => {
      console.log("getProducts: ", data );

    } );
  }

  getCategories(){
    this.categoryService.getAll().subscribe( (data: any) => {
      console.log("categories: ", data );
      this.categoryList = data;
    } );
  }

}


import { environment } from '@environments/environments';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseHttpService } from '../base-http.interface';
import {Product} from '@app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements BaseHttpService<Product> {

  private url = environment.url;

  constructor(private httpClient: HttpClient) { }

  create(data:Product ): Observable<Product> {
    return this.httpClient.post<Product>(`${this.url}/v1/products/`, data);
  }

  getAll(): Observable<Product> {
    return this.httpClient.get<Product>(`${this.url}/v1/products`);
  }

  getById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.url}/v1/products/${id}`);
  }

  getPagination(offset: number, limit: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.url}/v1/products?offset=${offset}&limit=${limit}`);
  }

  updateById(data:Product, id:number): Observable<Product> {
    throw new Error('Method not implemented.');
  }

  deleteById(id: number): Observable<Product> {
    throw new Error('Method not implemented.');
  }

}

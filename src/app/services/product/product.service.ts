import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseHttpService } from '../base-http.interface';
import {Product} from '@app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements BaseHttpService<Product> {

  constructor(private httpClient: HttpClient) { }

  create(): Observable<Product> {
    throw new Error('Method not implemented.');
  }
  getAll(): Observable<Product> {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Observable<Product> {
    throw new Error('Method not implemented.');
  }
  updateById(id: number): Observable<Product> {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number): Observable<Product> {
    throw new Error('Method not implemented.');
  }
  getPagination(offset: number, limit: number): Observable<Product> {
    throw new Error('Method not implemented.');
  }
}

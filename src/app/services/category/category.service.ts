import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@app/interfaces/category';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../base-http.interface';
import { environment } from '@environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements BaseHttpService<Category>  {

  private url = environment.url;

  constructor(private httpClient: HttpClient) { }

  create(data: Category): Observable<Category> {
    return this.httpClient.post<Category>(`${this.url}/v1/categories/`, data);
  }

  getAll(): Observable<Category> {
    return this.httpClient.get<Category>(`${this.url}/v1/categories`);
  }

  getById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.url}/v1/categories/${id}`);
  }

  getPagination(offset: number, limit: number): Observable<Category> {
    throw new Error('Method not implemented.');
  }

  updateById(data:Category ,id: number): Observable<Category> {
    return this.httpClient.put<Category>(`${this.url}/v1/categories/${id}`, data);
  }

  deleteById(id: number): Observable<Category> {
    throw new Error('Method not implemented.');
  }
}

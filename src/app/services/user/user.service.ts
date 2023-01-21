import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/interfaces/user';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../base-http.interface';
import { environment } from '@environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService implements BaseHttpService<User> {

  private url = environment.url;

  constructor(private httpClient: HttpClient) { }

  create(data: User): Observable<User> {
    return this.httpClient.post<User>(`${this.url}/v1/users/`, data);
  }

  getAll(): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/v1/users`);
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/v1/users/${id}`);
  }

  getPagination(offset: number, limit: number): Observable<User> {
    throw new Error('Method not implemented.');
  }

  updateById(data:User, id: number): Observable<User> {
    return this.httpClient.put<User>(`${this.url}/v1/users/${id}`, data);
  }

  deleteById(id: number): Observable<User> {
    throw new Error('Method not implemented.');
  }
}

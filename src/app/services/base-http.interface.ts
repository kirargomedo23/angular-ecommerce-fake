
import { Observable } from 'rxjs';

export interface BaseHttpService<T> {

  create(data: T): Observable<T>;
  getAll(): Observable<T>;
  getById(id:number):  Observable<T>;
  getPagination(offset: number, limit: number):  Observable<T>;
  updateById(data: T, id:number): Observable<T>;
  deleteById(id:number): Observable<T>;


}

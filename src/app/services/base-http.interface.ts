
import { Observable } from 'rxjs';

export interface BaseHttpService<T> {

  create(): Observable<T>;
  getAll(): Observable<T>;
  getById(id:number):  Observable<T>;
  updateById(id:number): Observable<T>;
  deleteById(id:number): Observable<T>;
  getPagination(offset: number, limit: number):  Observable<T>;


}

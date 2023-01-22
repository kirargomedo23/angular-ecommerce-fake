import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JWTToken, Login } from '@app/interfaces/auth';
import { User } from '@app/interfaces/user';
import { environment } from '@environments/environments';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.url;

  constructor(private httpClient: HttpClient) { }

  login(data: Login) : Observable<JWTToken> {
    let url = `${this.url}/v1/auth/login`;
    return this.httpClient.post<JWTToken>(url, data);
  }

  getUserSession(): Observable<User>{
    let url = `${this.url}/v1/auth/profile`;
    return this.httpClient.get<User>(url);
  }

  generateNewToken(refreshToken: string) : Observable<JWTToken> {
    let url = `${this.url}/v1/auth/refresh-token`;
    return this.httpClient.post<JWTToken>(url, {refreshToken});
  }

}

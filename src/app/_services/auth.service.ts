import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthUser } from '../_models/authUser';
import { User } from '../_models/user';

@Injectable()
export class AuthService {
    baseUrl = environment.apiUrl;
    userToken: any;
    decodedToken: any;

    constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) {}

    login(model: any) {
        return this.http.post<AuthUser>(`${this.baseUrl}/auth/login`, model,  {headers: new HttpHeaders()
          .set('Content-Type', 'application/json')})
          .map(user => {
          if (user) {
            localStorage.setItem('token', user.tokenString);
            localStorage.setItem('user', JSON.stringify(user.user));
            this.decodedToken = this.jwtHelperService.decodeToken(user.tokenString);
            this.userToken = user.tokenString;
          }
        });
      }

      register(user: User) {
        return this.http.post(`${this.baseUrl}/auth/register`, user, {headers: new HttpHeaders()
          .set('Content-Type', 'application/json')});
      }

      loggedIn() {
        const token = this.jwtHelperService.tokenGetter();

        if (!token) {
          return false;
        }

        return !this.jwtHelperService.isTokenExpired(token);
      }
}

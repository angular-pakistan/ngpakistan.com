import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ErrorService } from './error.service';
import { User } from '../model/user.interface';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {

  private api = '/api/v1/user';

  constructor(private http: Http, private errorService: ErrorService) { }

  save(user: User): any {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.api, user, options)
                .map(res => res.json())
                .catch(this.errorService.handleError);
  }

  setUser(token) {
    localStorage.setItem('user', token);
  }

  getUser() {
    if (localStorage.getItem('user')) {
      const token = this.JwtDecode(localStorage.getItem('user'));
      const now = Date.now() / 1000;
      if (token.exp < now) {
        this.clearUser();
        return null;
      }
      return token;
    }
    return null;
  }

  clearUser() {
    if (localStorage.getItem('user')) {
      localStorage.clear();
    }
  }

  private JwtDecode(token: String) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(atob(base64));
  }

  login(email: string, password: string): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const body = {
        email: email,
        password: password
    };

    return this.http.post(this.api + '/login', body, options)
              .map(res => res.json())
              .catch(this.errorService.handleError);
  }

  verify(id: string): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(this.api + `/verify/${id}`, options)
              .map(res => res.json())
              .catch(this.errorService.handleError);
  }

}
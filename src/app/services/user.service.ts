import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorService } from './error.service';
import { User } from '../model/user.interface';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserService {

  private api = '/api/v1/user';

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  save(user: User): any {
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(this.api, user, options)
                .pipe(
                  catchError(this.errorService.handleError)
                );
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
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const body = {
        email: email,
        password: password
    };

    return this.http.post(this.api + '/login', body, options)
              .pipe(
                  catchError(this.errorService.handleError)
                );
  }

  verify(email: string, token: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.get(this.api + `/verify?email=${email}&token=${token}`, options)
              .pipe(
                  catchError(this.errorService.handleError)
                );
  }

}
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ErrorService } from './error.service';
import { User } from '../model/user.interface';

@Injectable()
export class UserService {

  private api = '/api/v1/user';

  constructor(private http: Http,private errorService: ErrorService) { }
  
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
    return localStorage.getItem('user') ? this.JwtDecode(localStorage.getItem('user')) : null;
  }

  clearUser() {
    localStorage.clear();
  }

  private JwtDecode(token: String) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(atob(base64));
      }

  login(email: string, password: string): any {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    let body = {
        email: email,
        password: password
    };

    return this.http.post(this.api + '/login', body, options)
              .map(res => res.json())
              .catch(this.errorService.handleError);
  }

}
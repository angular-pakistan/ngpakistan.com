import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ErrorService } from './error.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { user } from '../model/user.interface';

@Injectable()
export class UserService {
  private api = '/api/v1/user';

  constructor(private http: Http,private ErrorService) { }

  save(user: user): any {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.api, user, options)
                .map(res => res.json())
                .catch(this.ErrorService.handleError);

  }

  login(email: string, password: string): any {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    let body={
        email:email,
        password:password
    }

    return this.http.post(this.api+'/login', body, options)
                .map(res => res.json())
                .catch(this.ErrorService.handleError);

  }

}

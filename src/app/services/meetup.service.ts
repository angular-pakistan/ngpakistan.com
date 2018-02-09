import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Meetup } from '../model/meetup.interface';

@Injectable()
export class MeetupService {
  private api = '/api/v1/meetup';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private authHeaders = new Headers({'Content-Type': 'application/json', 'Authorization': localStorage.getItem('user')});
  private authOptions = new RequestOptions({headers: this.authHeaders});
  constructor(private http: Http) { }

  save(meetup: Meetup): Observable<Response | any> {
    return this.http.post(this.api, meetup, this.authOptions)
                .map(res => res.json())
                .catch(this.handleError);

  }

  delete(meetupID): Observable<Response | any>  {
    return this.http.delete(`${this.api}/${meetupID}`, this.authOptions)
                .map(res => res.json())
                .catch(this.handleError);
  }

  getAll(): Observable<Response | any> {
    return this.http.get(this.api, this.options)
                .map(res => res.json())
                .catch(this.handleError);
  }

  getById(meetupID: string): Observable<Response | any> {
    return this.http.get(`${this.api}/${meetupID}`, this.options)
                .map(res => res.json())
                .catch(this.handleError);
  }

  update(meetup: Meetup): Observable<Response | any> {
    const meetupID = meetup._id;
    return this.http.put(`${this.api}/${meetupID}`, meetup, this.authOptions)
                .map(res => res.json())
                .catch(this.handleError);
  }

  addSubscriber(meetupID, userID): Observable<Response | any> {
    const body = {userID, date: Date.now(), level: 0, code: 0};
    return this.http.post(`${this.api}/${meetupID}/subscriber`, body, this.authOptions)
                .map(res => res.json())
                .catch(this.handleError);
  }

  removeSubscriber(meetupID, subscriberID): Observable<Response | any>  {
    return this.http.delete(`${this.api}/${meetupID}/subscriber/${subscriberID}`, this.authOptions)
                .map(res => res.json())
                .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body: any = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}

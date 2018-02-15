import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { Meetup } from '../model/meetup.interface';

@Injectable()
export class MeetupService {
  private api = '/api/v1/meetup';
  private options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private authOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('user')
      })
  };
  constructor(private http: HttpClient) { }

  save(meetup: Meetup): Observable<Response | any> {
    return this.http.post(this.api, meetup, this.authOptions)
                .pipe(
                  catchError(this.handleError)
                );

  }

  delete(meetupID): Observable<Response | any>  {
    return this.http.delete(`${this.api}/${meetupID}`, this.authOptions)
                .pipe(
                  catchError(this.handleError)
                );
  }

  getAll(): Observable<Response | any> {
    return this.http.get(this.api, this.options)
                .pipe(
                  catchError(this.handleError)
                );
  }

  getById(meetupID: string): Observable<Response | any> {
    return this.http.get(`${this.api}/${meetupID}`, this.options)
                .pipe(
                  catchError(this.handleError)
                );
  }

  update(meetup: Meetup): Observable<Response | any> {
    const meetupID = meetup._id;
    return this.http.put(`${this.api}/${meetupID}`, meetup, this.authOptions)
                .pipe(
                  catchError(this.handleError)
                );
  }

  addSubscriber(meetupID, userID): Observable<Response | any> {
    const body = {userID, date: Date.now(), level: 0, code: 0};
    return this.http.post(`${this.api}/${meetupID}/subscriber`, body, this.authOptions)
                .pipe(
                  catchError(this.handleError)
                );
  }

  removeSubscriber(meetupID, subscriberID): Observable<Response | any>  {
    return this.http.delete(`${this.api}/${meetupID}/subscriber/${subscriberID}`, this.authOptions)
                .pipe(
                  catchError(this.handleError)
                );
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

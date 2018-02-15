import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { Speaker } from '../model/speaker.interface';

@Injectable()
export class SpeakerService {
  private api = '/api/v1/speaker';
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

  save(speaker: Speaker): Observable<Response | any> {
    return this.http.post(this.api, speaker, this.authOptions)
                .pipe(
                  catchError(this.handleError)
                );

  }

  delete(speakerID): Observable<Response | any>  {
    return this.http.delete(`${this.api}/${speakerID}`, this.authOptions)
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

  getById(speakerID: string): Observable<Response | any> {
    return this.http.get(`${this.api}/${speakerID}`, this.options)
                .pipe(
                  catchError(this.handleError)
                );
  }

  update(speaker: Speaker): Observable<Response | any> {
    const speakerID = speaker._id;
    return this.http.put(`${this.api}/${speakerID}`, speaker, this.authOptions)
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

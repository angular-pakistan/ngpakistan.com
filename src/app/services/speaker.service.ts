import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Speaker } from '../model/speaker.interface';

@Injectable()
export class SpeakerService {
  private api = '/api/v1/speaker';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private authHeaders = new Headers({'Content-Type': 'application/json', 'Authorization': localStorage.getItem('user')});
  private authOptions = new RequestOptions({headers: this.authHeaders});
  constructor(private http: Http) { }

  save(speaker: Speaker): Observable<Response | any> {
    return this.http.post(this.api, speaker, this.authOptions)
                .map(res => res.json())
                .catch(this.handleError);

  }

  delete(speakerID): Observable<Response | any>  {
    return this.http.delete(`${this.api}/${speakerID}`, this.authOptions)
                .map(res => res.json())
                .catch(this.handleError);
  }

  getAll(): Observable<Response | any> {
    return this.http.get(this.api, this.options)
                .map(res => res.json())
                .catch(this.handleError);
  }

  getById(speakerID: string): Observable<Response | any> {
    return this.http.get(`${this.api}/${speakerID}`, this.options)
                .map(res => res.json())
                .catch(this.handleError);
  }

  update(speaker: Speaker): Observable<Response | any> {
    const speakerID = speaker._id;
    return this.http.put(`${this.api}/${speakerID}`, speaker, this.authOptions)
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

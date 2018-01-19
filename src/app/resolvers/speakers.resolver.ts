import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Speaker } from '../model/speaker.interface';
import { SpeakerService } from '../services/speaker.service';

@Injectable()
export class SpeakersResolver implements Resolve<Observable<any>> {
  constructor(private service: SpeakerService) {}
 
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Response | any> {
    return this.service.getAll();
  }
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Speaker } from '../model/speaker.interface';
import { SpeakerService } from '../services/speaker.service';

@Injectable()
export class SpeakerResolver implements Resolve<Observable<any>> {
  constructor(private service: SpeakerService) {}
 
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Response | any> {
    const id = route.params.id;
    return this.service.getById(`${id}`);
  }
}
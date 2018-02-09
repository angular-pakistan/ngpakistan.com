import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Meetup } from '../model/meetup.interface';
import { MeetupService } from '../services/meetup.service';

@Injectable()
export class MeetupResolver implements Resolve<Observable<any>> {
  constructor(private service: MeetupService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Response | any> {
    const id = route.params.id;
    return this.service.getById(`${id}`);
  }
}

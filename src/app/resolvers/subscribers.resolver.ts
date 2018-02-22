import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Meetup } from '../model/meetup.interface';
import { MeetupService } from '../services/meetup.service';

@Injectable()
export class SubscribersResolver implements Resolve<Observable<any>> {
  constructor(private meetupService: MeetupService) {}
 
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Response | any> {
    const id = route.params.id;
    return this.meetupService.getSubscribers(`${id}`);
  }
}

import { Component, Input } from '@angular/core';
import { Meetup } from '../../model/meetup.interface';

@Component({
  selector: 'meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.css']
})
export class MeetupListComponent {
  @Input() meetup: Meetup[];
  @Input() admin: boolean = false;
  constructor() { }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meetup-card',
  templateUrl: './meetup-card.component.html',
  styleUrls: ['./meetup-card.component.css']
})
export class MeetupCardComponent implements OnInit {

  @Input() currentMeetup;
  @Input() prevMeetup;

  constructor() { }

  ngOnInit() {
  }

}

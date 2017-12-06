import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meetup-card',
  templateUrl: './meetup-card.component.html',
  styleUrls: ['./meetup-card.component.css']
})
export class MeetupCardComponent {
  currentMeetup = '../../../assets/img/meetup-4-banner.png';
  prevMeetup = [
    {
      name: 'Meetup 3',
      location: 'folio3, Karachi'
    },
    {
      name: 'Meetup 2',
      location: '10Pearls, Karachi'
    },
    {
      name: 'Meetup 1',
      location: 'Attribe Solutions, Karachi'
    }
  ];
}

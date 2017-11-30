import { Component, OnInit, Input } from '@angular/core';
import { MeetupService } from '../../services/meetup.service';
import { Meetup } from '../../model/meetup.interface';

@Component({
  selector: 'app-meetup-card',
  templateUrl: './meetup-card.component.html',
  styleUrls: ['./meetup-card.component.css']
})
export class MeetupCardComponent implements OnInit {

  currentMeetup = '../../../assets/img/meetup-4-banner.png';
  meetups: Meetup[];
  previousMeetups: Meetup[];
  constructor(private service: MeetupService) { }

  ngOnInit() {
    this.service.getAll().subscribe(val => {
      this.meetups = val.data;
      this.previousMeetups = this.meetups.filter(meetup => Date.now() > Date.parse(meetup.date));
      this.previousMeetups.sort((a: Meetup, b: Meetup) => Date.parse(b.date) - Date.parse(a.date));
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { MeetupService } from '../../services/meetup.service';
import { Meetup } from '../../model/meetup.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meetup-card',
  templateUrl: './meetup-card.component.html',
  styleUrls: ['./meetup-card.component.css']
})
export class MeetupCardComponent implements OnInit {

  currentMeetup = '../../../assets/img/meetup-4-banner.png';
  meetups: Meetup[];
  previousMeetups: Meetup[];
  constructor(private service: MeetupService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.meetups = this.route
        .snapshot
        .data
        .response
        .data;
    this.previousMeetups = this.meetups.slice(0, 3);
  }

}

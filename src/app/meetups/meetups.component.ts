import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meetup } from '../model/meetup.interface';
import { MeetupService } from '../services/meetup.service';
import { MeetupListComponent } from './meetup-list/meetup-list.component';
@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.css']
})
export class MeetupsComponent implements OnInit {
  meetups: Meetup[];
  previousMeetups: Meetup[];
  response;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.response = this.route.snapshot.data.response;
    this.meetups = this.response.data;
  }

}

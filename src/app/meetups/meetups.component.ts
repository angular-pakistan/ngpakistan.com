import { Component, OnInit } from '@angular/core';
import { Meetup } from '../model/meetup.interface';
import { MeetupService } from '../services/meetup.service';
@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.css']
})
export class MeetupsComponent implements OnInit {
  meetups: Meetup[];
  previousMeetups: Meetup[];
  constructor(private service: MeetupService) { }

  ngOnInit() {
    this.service.getAll().subscribe(val => {
      this.meetups = val.data;
      this.meetups.sort((a: Meetup, b: Meetup) => Date.parse(b.date) - Date.parse(a.date));
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Meetup } from '../../model/meetup.interface';
import { MeetupService } from '../../services/meetup.service';
@Component({
  selector: 'app-manage-meetups',
  templateUrl: './manage-meetups.component.html',
  styleUrls: ['./manage-meetups.component.css']
})
export class ManageMeetupsComponent implements OnInit {
    meetups: Meetup[];

    constructor(private service: MeetupService) { }

    ngOnInit() {
        this.service.getAll().subscribe(val => {
        this.meetups = val.data;
        this.meetups.sort((a: Meetup, b: Meetup) => Date.parse(b.date) - Date.parse(a.date));
        });
    }

}

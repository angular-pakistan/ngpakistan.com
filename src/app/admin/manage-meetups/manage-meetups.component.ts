import { Component, OnInit } from '@angular/core';
import { Meetup } from '../../model/meetup.interface';
import { MeetupService } from '../../services/meetup.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-meetups',
  templateUrl: './manage-meetups.component.html',
  styleUrls: ['./manage-meetups.component.css']
})
export class ManageMeetupsComponent implements OnInit {
    meetups: Meetup[];
    response;
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.response = this.route.snapshot.data.response;
        this.meetups = this.response.data;
    }

}

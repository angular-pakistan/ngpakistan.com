import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { User } from '../../model/user.interface';
import { Meetup } from '../../model/meetup.interface';
import { MeetupService } from '../../services/meetup.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operator/first';

@Component({
  selector: 'app-manage-subscribers',
  templateUrl: './manage-subscribers.component.html',
  styleUrls: ['./manage-subscribers.component.css']
})
export class ManageSubscribersComponent implements OnInit {
    subscribers: User[];
    meetup;

    constructor(private route: ActivatedRoute,
                private service: MeetupService,
                private location: Location) {}

    ngOnInit() {
        this.meetup = this.route
            .snapshot
            .data
            .subscribers
            .data;
        this.subscribers = this.meetup.subscribers;
    }

}

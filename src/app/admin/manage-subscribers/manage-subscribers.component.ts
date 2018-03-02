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
    subscribers: any[];
    meetup;
    allSubscribersConfirmed = true;
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
        this.checkAllConfirmed();
    }

    private checkAllConfirmed() {
        let confirmed = true;
        this.subscribers.forEach((subscriber) => {
            if (!subscriber.confirmed) {
                confirmed = false;
            }
        });
        this.allSubscribersConfirmed = confirmed;
    }

    approve(id) {
        this.service.confirmSubscriber(this.meetup._id, id)
            .first()
            .subscribe(res => {
                if (res.success) {
                    this.subscribers.forEach(subscriber => {
                        if (subscriber._id === id) {
                            subscriber.confirmed = true;
                        }
                    });
                    this.checkAllConfirmed();
                }
            });
    }

    approveAll() {
        this.service.confirmAllSubscribers(this.meetup._id)
            .first()
            .subscribe(res => {
                if (res.success) {
                    this.allSubscribersConfirmed = true;
                    this.subscribers.forEach(subscriber => {
                        subscriber.confirmed = true;
                    });
                    this.checkAllConfirmed();
                }
            });
    }

}

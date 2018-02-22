import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meetup } from '../../model/meetup.interface';
import { MeetupService } from '../../services/meetup.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operator/first';

@Component({
  selector: 'app-manage-meetups',
  templateUrl: './manage-meetups.component.html',
  styleUrls: ['./manage-meetups.component.css']
})
export class ManageMeetupsComponent implements OnInit {
    meetups: Meetup[];
    constructor(private route: ActivatedRoute,
                private service: MeetupService,
                private location: Location) {}

    ngOnInit() {
        this.meetups = this.route
            .snapshot
            .data
            .meetups
            .data;
    }

    onDelete(meetup: Meetup, index: number) {
        if (confirm(`Are you sure you want to delete ${meetup.name} #${meetup.sequenceNo}?`)) {
            this.service.delete(meetup._id).first()
                .subscribe(val => this.meetups.splice(index, 1));
        }
    }

}

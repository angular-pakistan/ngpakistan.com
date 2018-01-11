import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Meetup } from '../../model/meetup.interface';
import { MeetupService } from '../../services/meetup.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-manage-meetups',
  templateUrl: './manage-meetups.component.html',
  styleUrls: ['./manage-meetups.component.css']
})
export class ManageMeetupsComponent implements OnInit {
    meetups: Meetup[];
    alive: boolean = true;
    constructor(private route: ActivatedRoute,
                private service: MeetupService,
                private location: Location) {}

    ngOnInit() {
        this.meetups = this.route
            .snapshot
            .data
            .response
            .data;
    }

    onDelete(meetup: Meetup){
        console.log(meetup._id);
        if(confirm(`Are you sure you want to delete ${meetup.name} #${meetup.sequenceNo}?`))
            this.alive = true;
            this.service.delete(meetup._id).first()
                .subscribe(val => this.service.getAll().first()
                    .subscribe(res => this.meetups = res.data));
    }

}

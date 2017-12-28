import { Component, OnInit } from '@angular/core';
import { Meetup } from '../../model/meetup.interface';
import { ActivatedRoute } from '@angular/router';
import { MeetupService } from '../../services/meetup.service';

@Component({
  selector: 'edit-meetup',
  templateUrl: './edit-meetup.component.html',
  styleUrls: ['./edit-meetup.component.css']
})
export class EditMeetupComponent implements OnInit {
    meetup: Meetup;

    constructor(private route: ActivatedRoute, private service: MeetupService) { }

    ngOnInit() {
      let id = this.route.snapshot.paramMap.get('id');
      this.service.getById(id).subscribe(val => {
        this.meetup = val.data;
      });
    }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meetup } from '../../model/meetup.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetupService } from '../../services/meetup.service';

import 'rxjs/add/operator/first';

@Component({
  selector: 'add-meetup',
  templateUrl: './add-meetup.component.html',
  styleUrls: ['./add-meetup.component.css']
})
export class AddMeetupComponent {
  private alive: boolean = true;
  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private service: MeetupService) { }

  handleSubmit(meetups: Meetup){
    this.service.save(meetups)
    .first()
    .subscribe( val => this.router.navigate(['../'], { relativeTo: this.route }),
        err => console.log(err));
  }

  onCancel(cancel){
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}

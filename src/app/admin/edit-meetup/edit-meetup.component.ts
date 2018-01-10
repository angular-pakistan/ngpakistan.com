import { Component, OnInit } from '@angular/core';
import { Meetup } from '../../model/meetup.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetupService } from '../../services/meetup.service';

@Component({
  selector: 'edit-meetup',
  templateUrl: './edit-meetup.component.html',
  styleUrls: ['./edit-meetup.component.css']
})
export class EditMeetupComponent implements OnInit {
  meetup: Meetup;
  response;
  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private service: MeetupService) { }

  ngOnInit() {
    this.response = this.route.snapshot.data.response;
    this.meetup = this.response.data;
  }

  handleSubmit(meetups: Meetup){
    this.service.update(meetups).subscribe(val => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

  onCancel(cancel){
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

}

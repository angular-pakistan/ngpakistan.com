import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meetup } from '../../model/meetup.interface';
import { Speaker } from '../../model/speaker.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetupService } from '../../services/meetup.service';
import { SpeakerService } from '../../services/speaker.service';

import 'rxjs/add/operator/first';

@Component({
  selector: 'add-meetup',
  templateUrl: './add-meetup.component.html',
  styleUrls: ['./add-meetup.component.css']
})
export class AddMeetupComponent implements OnInit{
  disable: boolean = false;
  speakers: Speaker[];
  disableSpeakerSubmit: boolean = false;
  showSpeakerForm: boolean = false;
  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private service: MeetupService,
              private speakerService: SpeakerService) { }

  ngOnInit(){
    this.speakers = this.route
          .snapshot
          .data
          .speakers
          .data;
  }

  toggleSpeakerForm(event: boolean){
    this.showSpeakerForm = event;
  }

  onSpeakerSubmit(speaker: Speaker){
    if(!this.disableSpeakerSubmit){
      this.disableSpeakerSubmit = true;
      this.speakerService.save(speaker)
        .first()
        .subscribe(val => {
          this.speakerService.getAll()
            .first()
            .subscribe(val => {
              this.speakers = val.data;
              this.showSpeakerForm = false;
              this.disableSpeakerSubmit = false;
            })
        }, err => { 
          this.disableSpeakerSubmit = false;
          this.showSpeakerForm = false;
        })
    }
  }

  handleSubmit(meetup: Meetup){
    if(!this.disable){
      this.disable = true;
      this.service.save(meetup)
      .first()
      .subscribe( val => this.router.navigate(['../'], { relativeTo: this.route }),
          err => this.disable = false);
    }
  }

  onCancel(cancel){
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}

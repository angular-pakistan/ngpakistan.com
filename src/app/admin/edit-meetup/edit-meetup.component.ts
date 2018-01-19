import { Component, OnInit } from '@angular/core';
import { Meetup } from '../../model/meetup.interface';
import { Speaker } from '../../model/speaker.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetupService } from '../../services/meetup.service';
import { SpeakerService } from '../../services/speaker.service';

import 'rxjs/add/operator/first';

@Component({
  selector: 'edit-meetup',
  templateUrl: './edit-meetup.component.html',
  styleUrls: ['./edit-meetup.component.css']
})
export class EditMeetupComponent implements OnInit {
  meetup: Meetup;
  disable: boolean = false;
  speakerDisable: boolean = false;
  newSpeaker: boolean = false;
  speakers: Speaker[];
  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private service: MeetupService,
              private speakerService: SpeakerService) { }

  ngOnInit() {
    this.meetup = this.route
        .snapshot
        .data
        .meetup
        .data;
    this.speakers = this.route
        .snapshot
        .data
        .speakers
        .data;
  }
  
  onNewSpeaker(event: boolean){
    this.newSpeaker = event;
  }

  onSpeakerSubmit(speaker: Speaker){
    if(!this.speakerDisable){
      this.speakerDisable = true;
      this.speakerService.save(speaker)
        .first()
        .subscribe(val => {
          this.speakerService.getAll()
            .first()
            .subscribe(val => {
              this.speakers = val.data;
              this.newSpeaker = false;
              this.speakerDisable = false;
            })
        }, err => { 
          this.speakerDisable = false;
          this.newSpeaker = false;
        })
    }
  }

  onSubmit(meetup: Meetup){
    if(!this.disable){
      this.disable = true;
      this.service.update(meetup)
      .first()
      .subscribe( val => this.router.navigate(['../../'], { relativeTo: this.route }),
          err => this.disable = false);
    } 
  }

  onCancel(cancel){
    this.disable = true;
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

}

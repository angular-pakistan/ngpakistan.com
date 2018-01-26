import { Component, OnInit } from '@angular/core';
import { Meetup } from '../../model/meetup.interface';
import { Speaker } from '../../model/speaker.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetupService } from '../../services/meetup.service';
import { SpeakerService } from '../../services/speaker.service';

import 'rxjs/add/operator/first';

@Component({
  selector: 'app-edit-meetup',
  templateUrl: './edit-meetup.component.html',
  styleUrls: ['./edit-meetup.component.css']
})
export class EditMeetupComponent implements OnInit {
  meetup: Meetup;
  disable = false;
  disableSpeakerSubmit = false;
  showSpeakerForm = false;
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

  toggleSpeakerForm(event: boolean) {
    this.showSpeakerForm = event;
  }

  onSpeakerSubmit(speaker: Speaker) {
    if (!this.disableSpeakerSubmit) {
      this.disableSpeakerSubmit = true;
      this.speakerService.save(speaker)
        .first()
        .subscribe(val => {
          this.speakers.unshift(val.data);
          this.showSpeakerForm = false;
        }, err => {
          this.disableSpeakerSubmit = false;
          this.showSpeakerForm = false;
        });
    }
  }

  onSubmit(meetup: Meetup) {
    if (!this.disable) {
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

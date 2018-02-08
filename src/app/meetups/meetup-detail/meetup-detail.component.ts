import { Component, OnInit } from '@angular/core';
import { Meetup } from '../../model/meetup.interface';
import { Speaker } from '../../model/speaker.interface';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetup-detail.component.html',
  styleUrls: ['./meetup-detail.component.css']
})
export class MeetupDetailComponent implements OnInit {
  meetup: Meetup;
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.meetup = this.route
        .snapshot
        .data
        .meetup
        .data;
  }

  sanitizeUrl(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

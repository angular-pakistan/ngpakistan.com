import { Component, OnInit } from '@angular/core';
import { Meetup } from '../../model/meetup.interface';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-meetups',
  templateUrl: './meetup-detail.component.html',
  styleUrls: ['./meetup-detail.component.css']
})
export class MeetupDetailComponent implements OnInit {
  meetup: Meetup;
  response;
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.response = this.route.snapshot.data.response;
    this.meetup = this.response.data;
  }

  sanitizeUrl(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

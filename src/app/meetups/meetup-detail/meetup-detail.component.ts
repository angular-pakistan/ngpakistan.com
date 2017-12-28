import { Component, OnInit } from '@angular/core';
import { Meetup } from '../../model/meetup.interface';
import { MeetupService } from '../../services/meetup.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-meetups',
  templateUrl: './meetup-detail.component.html',
  styleUrls: ['./meetup-detail.component.css']
})
export class MeetupDetailComponent implements OnInit {
  meetup: Meetup;

  constructor(
    private service: MeetupService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getById(id).subscribe(val => {
      this.meetup = val.data;
    });
  }

  sanitizeUrl(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

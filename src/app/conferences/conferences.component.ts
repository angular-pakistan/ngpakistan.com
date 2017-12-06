import { Component, OnInit } from '@angular/core';
import { ConferenceService } from '../services/conference.service';
import { Conference } from '../model/conference.interface';
@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.css']
})
export class ConferencesComponent implements OnInit {
  conferences: Conference[];
  constructor(private service: ConferenceService) { }

  ngOnInit() {
    this.conferences = this.service.getConferences();
  }

}

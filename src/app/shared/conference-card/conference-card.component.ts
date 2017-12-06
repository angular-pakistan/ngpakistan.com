import { Component, OnInit } from '@angular/core';
import { ConferenceService } from '../../services/conference.service';
import { Conference } from '../../model/conference.interface';
@Component({
  selector: 'app-conference-card',
  templateUrl: './conference-card.component.html',
  styleUrls: ['./conference-card.component.css']
})
export class ConferenceCardComponent implements OnInit {
  conferences: Conference[];
  constructor(private service: ConferenceService) { }

  ngOnInit() {
    this.conferences = this.service.getConferences();
  }

}

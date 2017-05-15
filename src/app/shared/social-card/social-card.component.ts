import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.css']
})
export class SocialCardComponent implements OnInit {

  @Input() socials;

  constructor() { }

  ngOnInit() {
  }

}

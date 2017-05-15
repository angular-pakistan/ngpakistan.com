import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  @Input() partners;

  constructor() { }

  ngOnInit() {
  }

}

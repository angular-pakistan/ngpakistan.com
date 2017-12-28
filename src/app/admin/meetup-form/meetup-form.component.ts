import { Component, OnInit, Input } from '@angular/core';
import { Meetup } from '../../model/meetup.interface';

@Component({
  selector: 'app-meetup-form',
  templateUrl: './meetup-form.component.html',
  styleUrls: ['./meetup-form.component.css']
})
export class MeetupFormComponent implements OnInit {
    @Input() meetup: Meetup;

    constructor() { }

    ngOnInit() {
        
    }

    onSubmit(meetup) {
      console.log(meetup);
    }
}

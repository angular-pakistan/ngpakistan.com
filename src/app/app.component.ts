import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  currentMeetup = '../../../assets/img/meetup-3-banner.png';
  prevMeetup = ['Meetup 2', 'Meetup 1', 'Check details ...'];
}

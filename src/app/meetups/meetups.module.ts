import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './meetups.routes';
import { MeetupsComponent } from './meetups.component';
import { MeetupDetailComponent } from './meetup-detail/meetup-detail.component';

console.log('`Meetups` bundle loaded asynchronously');

@NgModule({
  declarations: [
    MeetupsComponent,
    MeetupDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class MeetupsModule {
  public static routes = routes;
}

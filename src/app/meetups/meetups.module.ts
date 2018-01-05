import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './meetups.routes';
import { MeetupsComponent } from './meetups.component';
import { MeetupDetailComponent } from './meetup-detail/meetup-detail.component';
import { MeetupListComponent } from './meetup-list/meetup-list.component';
console.log('`Meetups` bundle loaded asynchronously');

@NgModule({
  declarations: [
    MeetupsComponent,
    MeetupDetailComponent,
    MeetupListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    MeetupListComponent
  ]
})
export class MeetupsModule {
  public static routes = routes;
}

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './admin.routes';
import { AdminComponent } from './admin.component';
import { ManageMeetupsComponent } from './manage-meetups/manage-meetups.component';
import { EditMeetupComponent } from './edit-meetup/edit-meetup.component';
import { MeetupFormComponent } from './meetup-form/meetup-form.component';

console.log('`Conferences` bundle loaded asynchronously');

@NgModule({
  declarations: [
    AdminComponent,
    ManageMeetupsComponent,
    ManageMeetupsComponent,
    EditMeetupComponent,
    MeetupFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
  ]
})
export class AdminModule {
  public static routes = routes;
}

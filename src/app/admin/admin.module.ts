import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { routes } from './admin.routes';
import { AdminComponent } from './admin.component';
import { ManageMeetupsComponent } from './manage-meetups/manage-meetups.component';
import { EditMeetupComponent } from './edit-meetup/edit-meetup.component';
import { MeetupFormComponent } from './meetup-form/meetup-form.component';
import { MeetupsModule } from '../meetups/meetups.module';

console.log('`Admin` bundle loaded asynchronously');

@NgModule({
  declarations: [
    AdminComponent,
    ManageMeetupsComponent,
    ManageMeetupsComponent,
    EditMeetupComponent,
    MeetupFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MeetupsModule
  ],
  providers: [
  ]
})
export class AdminModule {
  public static routes = routes;
}

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
import { AddMeetupComponent } from './add-meetup/add-meetup.component';
import { AdminGuard } from '../guards/admin.guard';
import { MeetupsModule } from '../meetups/meetups.module';
import { MeetupsResolver } from '../resolvers/meetups.resolver';
import { MeetupResolver } from '../resolvers/meetup.resolver';

console.log('`Admin` bundle loaded asynchronously');

@NgModule({
  declarations: [
    AdminComponent,
    ManageMeetupsComponent,
    ManageMeetupsComponent,
    EditMeetupComponent,
    MeetupFormComponent,
    AddMeetupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MeetupsModule
  ],
  providers: [
    MeetupsResolver,
    MeetupResolver,
    AdminGuard
  ]
})
export class AdminModule {
  public static routes = routes;
}

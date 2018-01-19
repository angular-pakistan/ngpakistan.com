import { ErrorService } from './services/error.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { MeetupsModule } from './meetups/meetups.module';
import { AdminModule } from './admin/admin.module';

import { DefaultRequestOptions } from './services/default-request-options.service';

import { AppComponent } from './app.component';
import { MeetupCardComponent } from './shared/meetup-card/meetup-card.component';
import { IntroCardComponent } from './shared/intro-card/intro-card.component';
import { ConferenceCardComponent } from './shared/conference-card/conference-card.component';
import { ProjectCardComponent } from './shared/project-card/project-card.component';
import { SocialCardComponent } from './shared/social-card/social-card.component';
import { JoinUsComponent } from './shared/joinUs-card/joinUs-card';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MainBannerComponent } from './shared/main-banner/main-banner.component';
import { PakistanCardComponent } from './shared/pakistan-card/pakistan-card.component';
import { BigCardComponent } from './shared/big-card/big-card.component';
import { SmallCardComponent } from './shared/small-card/small-card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactusCardComponent } from './shared/contactus-card/contactus-card.component';
import { PartnersComponent } from './shared/partners/partners.component';
import { NoContentComponent } from './no-content';
import { HomeComponent } from './home';
import { ContactusComponent } from './contactus';
import { JoinComponent } from './join';

import { ContactusService } from './services/contactus.service';
import { userService } from './services/user.service';
import { MeetupService } from './services/meetup.service';
import { AuthGuard } from './guards/auth.guard';
import { ConferenceService } from './services/conference.service';
import { SpeakerService } from './services/speaker.service';

import { ROUTES } from './app.route';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetupCardComponent,
    IntroCardComponent,
    ConferenceCardComponent,
    ProjectCardComponent,
    SocialCardComponent,
    NavigationComponent,
    MainBannerComponent,
    PakistanCardComponent,
    JoinUsComponent,
    BigCardComponent,
    SmallCardComponent,
    FooterComponent,
    ContactusCardComponent,
    PartnersComponent,
    NoContentComponent,
    HomeComponent,
    ContactusComponent,
    JoinComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot( ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    MeetupsModule,
    AdminModule
  ],
  providers: [ErrorService,
    AuthGuard, 
    DefaultRequestOptions, 
    ContactusService, 
    userService, 
    MeetupService, 
    ConferenceService,
    SpeakerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeetupCardComponent } from './shared/meetup-card/meetup-card.component';
import { IntroCardComponent } from './shared/intro-card/intro-card.component';
import { ConferenceCardComponent } from './shared/conference-card/conference-card.component';
import { ProjectCardComponent } from './shared/project-card/project-card.component';
import { SocialCardComponent } from './shared/social-card/social-card.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MainBannerComponent } from './shared/main-banner/main-banner.component';
import { PakistanCardComponent } from './shared/pakistan-card/pakistan-card.component';
import { BigCardComponent } from './shared/big-card/big-card.component';
import { SmallCardComponent } from './shared/small-card/small-card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactusCardComponent } from './shared/contactus-card/contactus-card.component';
import { PartnersComponent } from './shared/partners/partners.component';

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
    BigCardComponent,
    SmallCardComponent,
    FooterComponent,
    ContactusCardComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


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
import { NoContentComponent } from './no-content';
import { HomeComponent } from './home';
import { ContactusComponent } from './contactus';
import { JoinComponent } from './join';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { ROUTES } from './app.route';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        PartnersComponent,
        NoContentComponent,
        HomeComponent,
        ContactusComponent,
        JoinComponent,
        LoginComponent,
        SignupComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(ROUTES),
        ReactiveFormsModule,
        FormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));
});

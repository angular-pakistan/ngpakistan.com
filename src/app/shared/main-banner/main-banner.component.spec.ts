import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ROUTES } from '../../app.route';

import { MainBannerComponent } from './main-banner.component';
import { HomeComponent } from '../../home';
import { LoginComponent } from '../../login';
import { SignupComponent } from '../../signup';
import { MeetupCardComponent } from '../../shared/meetup-card/meetup-card.component';
import { ConferenceCardComponent } from '../../shared/conference-card/conference-card.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { SocialCardComponent } from '../../shared/social-card/social-card.component';
import { PartnersComponent } from '../../shared/partners/partners.component';
import { ContactusCardComponent } from '../../shared/contactus-card/contactus-card.component';
import { IntroCardComponent } from '../../shared/intro-card/intro-card.component';
import { BigCardComponent } from '../../shared/big-card/big-card.component';
import { JoinUsComponent } from '../../shared/joinUs-card/joinUs-card';

import { NoContentComponent } from '../../no-content';

describe('MainBannerComponent', () => {
  let component: MainBannerComponent;
  let fixture: ComponentFixture<MainBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        MainBannerComponent,
        ContactusCardComponent,
        MeetupCardComponent,
        ConferenceCardComponent,
        ProjectCardComponent,
        SocialCardComponent,
        PartnersComponent,
        IntroCardComponent,
        BigCardComponent,
        JoinUsComponent,
        LoginComponent,
        SignupComponent,
        NoContentComponent
      ],
      imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes(ROUTES) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

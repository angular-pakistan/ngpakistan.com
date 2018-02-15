import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ROUTES } from '../app.route';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';



import { MeetupsComponent } from './meetups.component';
import { MainBannerComponent } from '../shared/main-banner/main-banner.component';
import { HomeComponent } from '../home';
import { LoginComponent } from '../login';
import { SignupComponent } from '../signup';
import { MeetupCardComponent } from '../shared/meetup-card/meetup-card.component';
import { ConferenceCardComponent } from '../shared/conference-card/conference-card.component';
import { ProjectCardComponent } from '../shared/project-card/project-card.component';
import { SocialCardComponent } from '../shared/social-card/social-card.component';
import { PartnersComponent } from '../shared/partners/partners.component';
import { ContactusCardComponent } from '../shared/contactus-card/contactus-card.component';
import { IntroCardComponent } from '../shared/intro-card/intro-card.component';
import { BigCardComponent } from '../shared/big-card/big-card.component';
import { JoinUsComponent } from '../shared/joinUs-card/joinUs-card';
import { NoContentComponent } from '../no-content';

import { MeetupService } from '../services/meetup.service';

import { Meetup } from '../model/meetup.interface';
import { TestData } from '../services/test-data';

class MeetupServiceStub {
  getAll(){
    return Observable.create(obs => {
      obs.next({ data: TestData.meetup });
    })
  }
}

describe('MeetupsComponent', () => {
  let component: MeetupsComponent;
  let fixture: ComponentFixture<MeetupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MeetupsComponent,
        HomeComponent,
        ContactusCardComponent,
        MainBannerComponent,
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
      imports: [FormsModule, ReactiveFormsModule,RouterTestingModule.withRoutes(ROUTES)],
      providers: [{provide: MeetupService, useClass: MeetupServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

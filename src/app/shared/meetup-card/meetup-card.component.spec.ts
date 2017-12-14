import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ROUTES } from '../../app.route';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { MeetupCardComponent } from './meetup-card.component';
import { BigCardComponent } from '../big-card/big-card.component';
import { HomeComponent } from '../../home';
import { MeetupService } from '../../services/meetup.service';
import { LoginComponent } from '../../login';
import { SignupComponent } from '../../signup';
import { ConferenceCardComponent } from '../../shared/conference-card/conference-card.component';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { SocialCardComponent } from '../../shared/social-card/social-card.component';
import { PartnersComponent } from '../../shared/partners/partners.component';
import { ContactusCardComponent } from '../../shared/contactus-card/contactus-card.component';
import { IntroCardComponent } from '../../shared/intro-card/intro-card.component';
import { JoinUsComponent } from '../../shared/joinUs-card/joinUs-card';
import { NoContentComponent } from '../../no-content';
import { MainBannerComponent } from '../../shared/main-banner/main-banner.component';



import { Meetup } from '../../model/meetup.interface';
import { TestData } from '../../services/test-data';

class MeetupServiceStub {
  getAll(){
    return Observable.create(obs => {
      obs.next({ data: TestData.meetup });
    })
  }
}

describe('MeetupCardComponent', () => {
  let component: MeetupCardComponent;
  let fixture: ComponentFixture<MeetupCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MeetupCardComponent,
        BigCardComponent,
        HomeComponent,
        LoginComponent,
        ContactusCardComponent,
        MainBannerComponent,
        ConferenceCardComponent,
        ProjectCardComponent,
        SocialCardComponent,
        PartnersComponent,
        IntroCardComponent,
        JoinUsComponent,
        SignupComponent,
        NoContentComponent
      ],
      imports: [RouterTestingModule.withRoutes(ROUTES), FormsModule, ReactiveFormsModule],
      providers: [{provide: MeetupService, useClass: MeetupServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

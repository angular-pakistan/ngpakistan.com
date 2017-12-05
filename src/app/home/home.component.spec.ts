import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HomeComponent } from './home.component';
import { MainBannerComponent } from '../shared/main-banner/main-banner.component';
import { MeetupCardComponent } from '../shared/meetup-card/meetup-card.component';
import { ConferenceCardComponent } from '../shared/conference-card/conference-card.component';
import { ProjectCardComponent } from '../shared/project-card/project-card.component';
import { SocialCardComponent } from '../shared/social-card/social-card.component';
import { PartnersComponent } from '../shared/partners/partners.component';
import { ContactusCardComponent } from '../shared/contactus-card/contactus-card.component';
import { IntroCardComponent } from '../shared/intro-card/intro-card.component';
import { BigCardComponent } from '../shared/big-card/big-card.component';

import { MeetupService } from '../services/meetup.service';
import { ContactusService } from '../services/contactus.service';

import { Meetup } from '../model/meetup.interface';
import { TestData } from '../services/test-data';

class MeetupServiceStub {
  getAll(){
    return Observable.create(obs => {
      obs.next({ data: TestData.meetup });
    })
  }
}

class ContactusServiceStub {
  save(a: any){
    return Observable.create(obs => {
      obs.next(a);
    });
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent,
                      MainBannerComponent,
                      ContactusCardComponent,
                      MainBannerComponent,
                      MeetupCardComponent,
                      ConferenceCardComponent,
                      ProjectCardComponent,
                      SocialCardComponent,
                      PartnersComponent,
                      IntroCardComponent,
                      BigCardComponent
      ],
      imports: [ FormsModule, ReactiveFormsModule ],
      providers: [ 
        { provide: MeetupService, useClass: MeetupServiceStub },
        { provide: ContactusService, useClass: ContactusServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConferenceService } from '../../services/conference.service';
import { ConferenceCardComponent } from './conference-card.component';

class ConferenceServiceStub {
  getConferences(){
    return [{
            name: 'Angular Conf Pakistan 2018',
            date: 'February 2018',
            organiser: 'Pakistan Open Source ™ & Angular Pakistan',
            url: 'https://osconf.org/'
        },
        {
            name: 'JS Pakistan Conf 2018',
            date: 'November 2018',
            organiser: 'Pakistan Open Source ™',
            url: 'https://osconf.org/'
        }];
  }
}

describe('ConferenceCardComponent', () => {
  let component: ConferenceCardComponent;
  let fixture: ComponentFixture<ConferenceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceCardComponent ],
      providers: [{provide: ConferenceService, useClass: ConferenceServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

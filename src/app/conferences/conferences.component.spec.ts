import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ConferencesComponent } from './conferences.component';
import { ConferenceService } from '../services/conference.service';
import { TestData } from '../services/test-data';

class ConferenceServiceStub {
  getConferences(){
    return Observable.create(obs => {
      obs.next({ data: TestData.meetup });
    })
  }
}

describe('ConferencesComponent', () => {
  let component: ConferencesComponent;
  let fixture: ComponentFixture<ConferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencesComponent ],
      providers: [{provide: ConferenceService, useClass: ConferenceServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

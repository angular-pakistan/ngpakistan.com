import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { MeetupCardComponent } from './meetup-card.component';
import { BigCardComponent } from '../big-card/big-card.component';

import { MeetupService } from '../../services/meetup.service';

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
        BigCardComponent
      ],
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

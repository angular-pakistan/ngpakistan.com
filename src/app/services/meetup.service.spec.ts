import {
  fakeAsync,
  inject,
  TestBed,
  tick
} from '@angular/core/testing';
import {
  HttpModule,
  ResponseOptions,
  Response,
  Http,
  BaseRequestOptions
} from '@angular/http';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

import { MeetupService } from './meetup.service';
import { Meetup } from '../model/meetup.interface';
import { TestData } from './test-data';

describe('MeetupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        MeetupService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http, 
          useFactory: (backend, options) => new Http(backend, options), 
          deps: [MockBackend, BaseRequestOptions] 
        }
      ]
    });
  });

  it('should be created', inject([MeetupService], (service: MeetupService) => {
    expect(service).toBeTruthy();
  }));
});

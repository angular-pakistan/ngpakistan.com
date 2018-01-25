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

import { SpeakerService } from './speaker.service';
import { Speaker } from '../model/speaker.interface';
import { TestData } from './test-data';

describe('SpeakerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        SpeakerService,
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

  it('should be created', inject([SpeakerService], (service: SpeakerService) => {
    expect(service).toBeTruthy();
  }));
});

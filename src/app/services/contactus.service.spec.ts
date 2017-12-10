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

import { ContactusService } from './contactus.service';
import { ContactUs } from '../model/contactus.interface';
import { TestData } from './test-data';

describe('ContactusService', () => {
  let service: ContactusService;
  let mockBackend: MockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ContactusService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http, 
          useFactory: (backend, options) => new Http(backend, options), 
          deps: [MockBackend, BaseRequestOptions] 
        }
      ]
    });
    mockBackend = TestBed.get(MockBackend); 

    service = TestBed.get(ContactusService);
  });

  it('should be created',  () => {
    expect(service).toBeTruthy();
  });

  it('should save the contactus message and return response', fakeAsync(() => {
    mockBackend.connections.subscribe(connection => { 
      connection.mockRespond(new Response(<ResponseOptions>{ 
        body: JSON.stringify(TestData.contactus[0])
      }));
    });

    service.save(TestData.contactus[0]).subscribe(res => {
      expect(res.name).toBe('John Doe');
      expect(res.email).toBe('john@email.com');
      expect(res.subject).toBe('Feedback');
      expect(res.message).toBe('The event was awesome!');
    });
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ContactusService } from './contactus.service';

describe('ContactusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactusService]
    });
  });

  it('should be created', inject([ContactusService], (service: ContactusService) => {
    expect(service).toBeTruthy();
  }));
});

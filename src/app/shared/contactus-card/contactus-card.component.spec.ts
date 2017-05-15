import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusCardComponent } from './contactus-card.component';

describe('ContactusCardComponent', () => {
  let component: ContactusCardComponent;
  let fixture: ComponentFixture<ContactusCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactusCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

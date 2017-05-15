import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PakistanCardComponent } from './pakistan-card.component';

describe('PakistanCardComponent', () => {
  let component: PakistanCardComponent;
  let fixture: ComponentFixture<PakistanCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PakistanCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PakistanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

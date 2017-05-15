import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroCardComponent } from './intro-card.component';

describe('IntroCardComponent', () => {
  let component: IntroCardComponent;
  let fixture: ComponentFixture<IntroCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

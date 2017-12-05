import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressKitComponent } from './presskit.component';

describe('ProjectsComponent', () => {
  let component: PressKitComponent;
  let fixture: ComponentFixture<PressKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

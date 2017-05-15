import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativesComponent } from './creatives.component';

describe('CreativesComponent', () => {
  let component: CreativesComponent;
  let fixture: ComponentFixture<CreativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

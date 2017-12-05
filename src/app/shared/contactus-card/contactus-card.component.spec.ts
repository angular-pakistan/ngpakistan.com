import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactusService } from '../../services/contactus.service';
import { ContactusCardComponent } from './contactus-card.component';

class ContactusServiceStub {
  
}

describe('ContactusCardComponent', () => {
  let component: ContactusCardComponent;
  let fixture: ComponentFixture<ContactusCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactusCardComponent ],
      imports: [ReactiveFormsModule,
                FormsModule,
      ],
      providers: [ { provide: ContactusService, useClass: ContactusServiceStub} ]
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

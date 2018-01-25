import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { ContactusService } from '../../services/contactus.service';
import * as moment from 'moment'; 

@Component({
  selector: 'app-contactus-card',
  templateUrl: './contactus-card.component.html',
  styleUrls: ['./contactus-card.component.css']
})
export class ContactusCardComponent implements OnInit {

  contactUsForm: FormGroup;
  showSuccessMsg = false;

  constructor(private fb: FormBuilder, private contactUsService: ContactusService) {
  }

  ngOnInit() {
    this.contactUsForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3),  Validators.maxLength(50)]) ],
      email: ['', Validators.compose([Validators.required, Validators.email ,  Validators.maxLength(75)]) ],
      subject: ['', Validators.compose([Validators.required, Validators.minLength(5),  Validators.maxLength(100)]) ],
      message: ['', Validators.compose([Validators.required, Validators.minLength(1),  Validators.maxLength(500)]) ],
      date: [ moment().format("YYYY-MM-DD") ]
    });
  }

  onSubmit() {
    this.contactUsService.save(this.contactUsForm.value)
      .subscribe((res) => {
        this.contactUsForm.reset();
        this.showSuccessMsg = true;
        setTimeout(() => {
          this.showSuccessMsg = false;
        }, 5000);
      });
  }
}

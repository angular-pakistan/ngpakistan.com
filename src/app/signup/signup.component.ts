import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.interface';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {
  confirmPassword = '';
  disable = false;
  success = false;
  showErrorMessage = false;
  errorMessage = '';
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private Router: Router) { }

  ngOnInit() {
    const urlPattern = '^(?:(http[s]?):\\/\\/)?([^:\\/\\s]+)(:[0-9]+)?((?:\\/\\w+)*\\/)([\\w\\-\\.]+[^#?\\s]+)([^#\\s]*)?(#[\\w\\-]+)?$';
    this.signUpForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4),  Validators.maxLength(50)]) ],
      email: ['', Validators.compose([Validators.required, Validators.email ,  Validators.maxLength(75)]) ],
      phone: ['', Validators.compose([Validators.required,
                  Validators.pattern('^\\+?\\d+$'),
                  Validators.minLength(3),
                  Validators.maxLength(20)])],
      github: ['', Validators.compose([Validators.pattern(urlPattern)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirm: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  signup(user) {
    if (this.signUpForm.valid && !this.passwordMismatch()) {
      this.disable = true;
      this.userService.save(user).subscribe( data => {
        if (data.success) {
          this.success = true;
        }
        if (data.error) {
          this.disable = false;
          this.errorMessage = data.error;
          this.showErrorMessage = true;
        }
      }, err => this.disable = false);
    }
  }

  resetError() {
    this.showErrorMessage = false;
  }

  hasError(name: string) {
      const field = this.signUpForm.get(name);
      return field.invalid && (field.dirty || field.touched);
  }

  passwordMismatch() {
    const password = this.signUpForm.get('password');
    const confirm = this.signUpForm.get('confirm');
    if ((confirm.dirty || confirm.touched) && (password.dirty || password.touched)) {
      return password.value !== confirm.value;
    }
    return false;
  }
}

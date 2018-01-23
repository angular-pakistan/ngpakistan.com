import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function allowEmptyEmail(control: AbstractControl): ValidationErrors | null {
    return control.value === '' ? null : Validators.email(control);
}
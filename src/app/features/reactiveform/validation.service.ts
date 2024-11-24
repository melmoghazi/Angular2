import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  static mustMatch(controlName: string, matchingControlName: string): ValidatorFn {
    console.log('testtest');
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control = formGroup.get(controlName);
      if (control) {
        console.log('password value', control?.value);
      }
      const matchingControl = formGroup.get(matchingControlName);

      if (!control || !matchingControl) {
        return null;
      }
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return null;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
        return { mustMatch: true };
      } else {
        matchingControl.setErrors(null);
        return null;
      }
    };
  }

  static matchValuesValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);
  
      if (!control || !matchingControl) {
        return null; // Form controls not found
      }
  
      if (matchingControl.errors && !matchingControl.errors['valueMismatch']) {
        return null; // Skip if other validators have failed
      }
  
      // Set or clear the error
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ valueMismatch: true });
      } else {
        matchingControl.setErrors(null);
      }
  
      return null;
    };
  }
}

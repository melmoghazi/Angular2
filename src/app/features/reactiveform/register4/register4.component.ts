import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { JsonPipe, NgIf } from '@angular/common';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-register4',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe,NgIf],
  templateUrl: './register4.component.html',
  styleUrl: './register4.component.scss'
})
export class Register4Component implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group(
      {
        userName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]]
      }, { Validators: ValidationService.mustMatch('password','confirmPassword')}
    );
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
    }
  }
}

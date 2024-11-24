import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register3',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register3.component.html',
  styleUrl: './register3.component.scss'
})
export class Register3Component implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.InitForm();
  }

  private InitForm(): void {
    this.form = this.formBuilder.group({
      userName: ['test', Validators.required],
      email: '',
      password: '',
      confirmPassword: ''
    }
    );
  }


}

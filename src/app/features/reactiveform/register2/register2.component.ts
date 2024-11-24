import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register2',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register2.component.html',
  styleUrl: './register2.component.scss'
})
export class Register2Component {

  form: FormGroup;
  userName = new FormControl<string>('test', { updateOn: 'blur', nonNullable: true });

  constructor() {
    this.form = this.getFormModels();
  }

  reset(): void {
    this.userName.reset();
  }

  private getFormModels() {
    return new FormGroup(
      {
        userName: this.userName,
        email: new FormControl({ value: '', disabled: false }),
        password: new FormControl(''),
        confirmPassword: new FormControl('')
      }
    );
  }



}

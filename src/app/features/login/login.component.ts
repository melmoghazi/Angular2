import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login(loginForm: NgForm) {
    console.log('form status', loginForm.status, loginForm.value);
  }

  login2(loginForm2: NgForm) {
    console.log('form status', loginForm2.status, loginForm2.value);
  }
  email3: string = '';
  pwd3: string = '';

//object on ther fly
  loginDto: {
    email4: string, pwd4: string
  } = { email4: '', pwd4: '' };

}

import { NgForm } from '@angular/forms';
import { Component, CSP_NONCE } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.scss'
})
export class Login2Component {

  loginDto: { email: string, pwd: string } = { email: '', pwd: '' };

  OutOfFormButtonLogin(loginForm: NgForm, event: Event) {
    loginForm.onSubmit(event);
    console.log('Is From Valid = ', loginForm.valid, '-loginform value = ', loginForm.value)
  }


  loginDto2: { email: string, pwd: string } = { email: '', pwd: '' };
  OutOfFormButtonLogin2(loginForm2: NgForm) {
    console.log('Is From Valid = ', loginForm2.valid, '-loginform value = ', loginForm2.value)
  }

  loginDto3: { email3: string, pwd3: string } = { email3: '', pwd3: '' };

  onEmailChanged(email: string) {
    console.log('Email=', email);
  }

}


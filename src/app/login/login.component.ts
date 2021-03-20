import {Component, EventEmitter, Output} from '@angular/core';
import {TouchSequence} from 'selenium-webdriver';
import {LoginStatusService} from '../services/login-status/login-status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private logStatus: LoginStatusService) {
    this.login = '';
    this.password = '';
  }

  login: string;
  password: string;
  logIn(): void {
    // server-logic
    this.logStatus.setLogStatus(true);
  }


}

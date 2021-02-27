import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { LoginStatusService } from '../login-status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private logStatus: LoginStatusService) { }

  ngOnInit(): void {
  }

  login: string = '';
  password: string = '';

  logIn(){
    //server-logic
    this.logStatus.setLogStatus(true);
  }


}

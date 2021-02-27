import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login: string = '';
  password: string = '';
  log:boolean = false;
  @Output() logStatus = new EventEmitter<boolean>();

  logIn(){
    //server-logic
    this.log = !this.log;
    this.logStatus.emit(this.log);
  }


}

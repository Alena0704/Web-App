import {Component, OnInit} from '@angular/core';
import {LoginStatusService} from '../services/login-status/login-status.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private logStatus: LoginStatusService) {
  }

  ngOnInit(): void {
  }


  getLogStatus(): boolean {
    return this.logStatus.getLogStatus();
  }

  logOut(): void {
    this.logStatus.setLogStatus(false);
  }
}

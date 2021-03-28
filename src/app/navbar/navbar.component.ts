import {Component, OnInit} from '@angular/core';
import {LoginStatusService} from '../services/login-status/login-status.service';
import {ProjectDataService} from '../services/project data/project-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private logStatus: LoginStatusService, private subData: ProjectDataService) {
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

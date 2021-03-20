import {Component} from '@angular/core';
import {LoginStatusService} from '../services/login-status/login-status.service';
import {ProjectDataService} from '../services/project data/project-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private logStatus: LoginStatusService, private subData: ProjectDataService) {
    this.login = '';
    this.password = '';
  }

  login: string;
  password: string;

  logIn(): void {

    this.logStatus.setLogStatus(true);
    this.subData.setProjectData(); // loading data from server side
  }


}

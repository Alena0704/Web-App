import {Component, OnInit} from '@angular/core';
import {LoginStatusService} from '../../shared/services/login-status/login-status.service';
import {TableDataService} from '../../shared/services/project data/table-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private logStatus: LoginStatusService, private subData: TableDataService) {
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

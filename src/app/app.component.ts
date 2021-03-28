import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginStatusService} from './services/login-status/login-status.service';
import {ProjectDataService} from './services/project data/project-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  constructor(private logStatus: LoginStatusService, private subData: ProjectDataService) {
    // this.dataSubs
  }

  // dataSubs: Subscription;

  ngOnInit(): void {
    this.subData.setProjectData();
  }

  ngOnDestroy(): void {

  }

  title = 'Chikadrilo';

  getLogStatus(): boolean {
    return this.logStatus.getLogStatus();
  }
}

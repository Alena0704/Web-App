import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginStatusService} from './services/login-status/login-status.service';
import {TableDataService} from './services/project data/table-data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  constructor(private logStatus: LoginStatusService) {
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  title = 'Chikadrilo';

  getLogStatus(): boolean {
    return this.logStatus.getLogStatus();
  }
}

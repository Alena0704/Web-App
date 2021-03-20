import {Component} from '@angular/core';
import {LoginStatusService} from './services/login-status/login-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private logStatus: LoginStatusService) {
  }

  title = 'Chikadrilo';

  getLogStatus(): boolean {
    return this.logStatus.getLogStatus();
  }
}

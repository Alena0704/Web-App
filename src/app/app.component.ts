import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './shared/services/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private auth: AuthService) {
  }

  getLogStatus(): boolean | undefined {
    return this.auth.getLogStatus();
  }

  title = 'System knoledges control';

}

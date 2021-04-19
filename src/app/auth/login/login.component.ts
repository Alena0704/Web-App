import {ThrowStmt} from '@angular/compiler';
import {Component} from '@angular/core';
import {AuthService} from 'src/app/shared/services/auth/auth.service';
import {LoginStatusService} from '../../shared/services/login-status/login-status.service';
import {TableDataService} from '../../shared/services/table data/table-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private authService: AuthService) {
    this.email = '';
    this.password = '';

  }

  email: string;
  password: string;

  logIn(): void {
    // this.authService.LogIn(this.email, this.password);
  }
}

import {Component} from '@angular/core';
import {AuthService} from 'src/app/shared/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private authService: AuthService, private route: Router) {
    this.email = '';
    this.password = '';
    this.logFunctionStatus = false;
  }

  logFunctionStatus: boolean;
  email: string;
  password: string;
  responseMessage: string | undefined;

  logIn(): void {
    this.logFunctionStatus = true;
    this.responseMessage = '';
    this.authService.LogIn(this.email, this.password)
      .then(data => {
        this.authService.setUser(data);
        this.cleanInput();
        this.logFunctionStatus = false;
        if (this.authService.getLogStatus()) {
          this.route.navigate(['/profile']);
          return;
        }
        this.responseMessage = this.getLogMessage();
      });

  }

  cleanInput(): void {
    this.email = '';
    this.password = '';
  }

  getLogMessage(): string | undefined {
    {
      return this.authService.getErrorResponse();
    }
  }
}

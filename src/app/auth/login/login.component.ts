import {Component} from '@angular/core';
import {AuthService} from 'src/app/shared/services/auth/auth.service';

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
  message: string | undefined;

  logIn(): void {
    this.message = '';
    this.authService.LogIn(this.email, this.password)
      .then(data => {
        this.authService.setUser(data);
        this.message = this.getLogMessage();
      });
    this.email = '';
    this.password = '';
  }

  getLogMessage(): string | undefined {
    if (this.authService.getLogStatus()) {
      return 'Success!';
    } else {
      // console.log(this.authService.getErrorResponse()); // too many calls here
      return this.authService.getErrorResponse();
    }
  }
}

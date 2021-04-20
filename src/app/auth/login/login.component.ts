import {Component} from '@angular/core';
import {AuthService} from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private authService: AuthService) {
    this.email = 'test@gmail.com';
    this.password = '';
  }

  email: string;
  password: string;
  message: string | undefined;

  logIn(): void {
  //  this.email = (document.getElementById('email') as HTMLInputElement).value.toString();
  //  this.password = (document.getElementById('password') as HTMLInputElement).value.toString();
    this.authService.LogIn(this.email, this.password)
      .subscribe(response => this.authService.setUser(response));
    this.email = '';
    this.password = '';
    // this.message = this.getLogMessage();
  }

  getLogMessage(): string | undefined {
    if (this.authService.getLogStatus()) {
      return 'Success!';
    } else {
      console.log(this.authService.getErrorResponse()); // too many calls here
      return this.authService.getErrorResponse();
    }
  }
}

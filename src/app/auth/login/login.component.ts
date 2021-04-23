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
  }

  email: string;
  password: string;
  responseMessage: string | undefined;

  logIn(): void {
    this.responseMessage = '';
    this.authService.LogIn(this.email, this.password)
      .then(data => {
        this.authService.setUser(data);
        this.email = '';
        this.password = '';
        if (this.authService.getLogStatus()) {
          this.route.navigate(['/profile']);
          return;
        }
        console.log('hello');
        this.responseMessage = this.getLogMessage();
      });

  }

  getLogMessage(): string | undefined {
    {
      return this.authService.getErrorResponse();
    }
  }
}

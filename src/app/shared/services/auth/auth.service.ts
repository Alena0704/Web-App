import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../../Interfaces/i-user/i-user';
import {IUserLogin} from '../../Interfaces/i-user/i-user-login';
import {IUserRegister} from '../../Interfaces/i-user/i-user-register';


interface AuthResponse {
  success: boolean;
  user: IUser;
  errorMessage?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  private REGISTER_URL = '/api/auth/register';
  private LOG_URL = '/api/auth/login';

  private userLogin: IUserLogin = {} as IUserLogin;
  private userData: IUser = {} as IUser;
  private errorResponse: string | undefined;
  private LoginStatus: boolean | undefined;

  LogIn(email: string, password: string): Promise<HttpResponse<AuthResponse>> {
    this.userLogin = {email, password};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response' as const,
      responseType: 'json' as const
    };
    return this.http.post<AuthResponse>(this.LOG_URL, this.userLogin, httpOptions).toPromise();
  }

  setUser(user: HttpResponse<AuthResponse>): void {
    this.LoginStatus = user.body?.success;
    if (this.LoginStatus) {
      this.userData = this.responseToIUser(user.body?.user);
    } else {
      this.errorResponse = user.body?.errorMessage;
      this.LoginStatus = false; // in case we get undefined (which should not happen)
    }
  }

  responseToIUser(user: IUser | undefined): IUser {
    const parsedJSON = JSON.parse(JSON.stringify(user));
    const convertedUser: IUser = {
      name: parsedJSON[0].name,
      surname: parsedJSON[0].surname,
      patronymic: parsedJSON[0].patronymic,
      email: parsedJSON[0].email,
      phoneNumber: parsedJSON[0].phoneNumber,
      address: parsedJSON[0].address,
      website: parsedJSON[0].website,
      github: parsedJSON[0].github,
      twitter: parsedJSON[0].twitter,
      instagram: parsedJSON[0].instagram,
      facebook: parsedJSON[0].facebook
    };
    return convertedUser;
  }

  getLogStatus(): boolean | undefined {
    return this.LoginStatus;
  }

  getErrorResponse(): string | undefined {
    return this.errorResponse;
  }

  getUserData(): IUser {
    return this.userData;
  }

  register(userData: IUserRegister): Observable<IUserRegister> {
    return this.http.post<IUserRegister>(this.REGISTER_URL, userData);
  }

}

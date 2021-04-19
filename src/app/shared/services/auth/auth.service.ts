import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../../Interfaces/i-user/i-user';
import {IUserLogin} from '../../Interfaces/i-user/i-user-login';
import {pluck, tap} from 'rxjs/operators';
import {IUserRegister} from '../../Interfaces/i-user/i-user-register';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  private REGISTER_URL = '/api/auth/register';
  private LOG_URL = '/api/auth/login';
  private USER_URL = '/api/user/data';
  private userLogin: IUserLogin = {} as IUserLogin;
  private userData: IUser = {} as IUser;

  LogIn(email: string, password: string): Observable<IUserLogin> {
    this.userLogin = {email, password};
    return this.http.post<IUserLogin>(this.LOG_URL, this.userLogin);
  }

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(this.USER_URL, );
  }

  Register(userData: IUserRegister): Observable<IUserRegister> {
    return this.http.post<IUserRegister>(this.REGISTER_URL, userData);
  }

}

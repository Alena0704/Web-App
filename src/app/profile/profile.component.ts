import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth/auth.service';
import {IUser} from '../shared/Interfaces/i-user/i-user';
import {installTempPackage} from '@angular/cli/utilities/install-package';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private authService: AuthService) {
    this.user = authService.getUserData();
  }

  user: IUser = {} as IUser;
  photo = './assets/aniki.png';


  ngOnInit(): void {
  }

}

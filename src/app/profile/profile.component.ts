import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  fullName = 'Billy Herrington'
  job = 'Master'
  email = 'spanking@gachi.muchi'
  phone = '1312312312312'
  mobile = '58923475104998'
  address = 'deepDarkFantasies'
  photo = './assets/aniki.png'


  webSite = '...'
  gitHub = '...'
  twitter = '...'
  instagram = '...'
  facebook = '...'


  constructor() {
  }

  ngOnInit(): void {
  }

}

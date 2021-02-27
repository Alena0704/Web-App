import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Chikadrilo';

 private logStatus: boolean = false;

  getLogStatus():boolean{
    return this.logStatus;
  }
  setLogStatus($event:boolean){
    this.logStatus = $event;
  }
}

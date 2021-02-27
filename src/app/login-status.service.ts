import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  private logStatus = false;

  getLogStatus(): boolean {
    return this.logStatus;
  }

  setLogStatus(newStatus: boolean): void {
    this.logStatus = newStatus;
  }

}

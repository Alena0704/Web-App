import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  private logStatus = true;

  getLogStatus(): boolean {
    return this.logStatus;
  }

  setLogStatus(newStatus: boolean): void {
    this.logStatus = newStatus;
  }

}

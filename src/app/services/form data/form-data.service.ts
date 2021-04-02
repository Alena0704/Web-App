import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IFormSubMat} from '../../Interfaces/i-form-SubMat';

@Injectable({
  providedIn: 'root'
})



export class FormDataService {

  private url = '/api/form-data';
  private data: IFormSubMat[] = [];

  constructor(private http: HttpClient) {
  }

  getObserveData(): Observable<IFormSubMat[]> {
    return this.http.get<IFormSubMat[]>(this.url);
  }

  getData(): IFormSubMat[] {
    return this.data;
  }

  uploadFormData(): void {
    this.getObserveData()
      .subscribe(data => this.data = data);
  }


}

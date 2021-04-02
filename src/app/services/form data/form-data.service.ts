import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

interface SubMat {
  subject: string;
  matType: string;
}

export class FormDataService {

  private url = '/api/form-data';
  private data: SubMat[] = [];

  constructor(private http: HttpClient) {
  }

  getObserveData(): Observable<SubMat[]> {
    return this.http.get<SubMat[]>(this.url);
  }


}

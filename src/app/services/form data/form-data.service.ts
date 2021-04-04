import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IFormInput} from '../../Interfaces/i-form/i-form-input';
import {IFormTaskType} from '../../Interfaces/i-form/i-form-task-type';
import {IFormData} from '../../Interfaces/i-form/i-form-data';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FormDataService {

  constructor(private http: HttpClient) {
    this.subjectTypes = [
      {name: 'Тест'},
      {name: 'Задание'}
    ];
  }

  subjectTypes: IFormTaskType[] = []; // constant values (could be changed by getting them from DB)
  private GET_URL = '/api/form/data';
  private POST_URL = '/api/form/upload';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getObserveFormData(): Observable<IFormInput[]> { // getting all subjects and matTypes
    return this.http.get<IFormInput[]>(this.GET_URL);
  }

  getTaskTypes(): IFormTaskType[] {
    return this.subjectTypes;
  }

  postFormData(data: IFormData): void {
    this.http.post<IFormData>(this.POST_URL, data, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      ).subscribe();
  }

  errorHandler(error: HttpErrorResponse): any {
    return Observable.throw(error.message || 'server error.');
  }

}

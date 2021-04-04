import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IFormInput} from '../../Interfaces/i-form/i-form-input';
import {IFormTaskType} from '../../Interfaces/i-form/i-form-task-type';

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
  private url = '/api/form-data';


  getObserveFormData(): Observable<IFormInput[]> { // getting all subjects and matTypes
    return this.http.get<IFormInput[]>(this.url);
  }

  getTaskTypes(): IFormTaskType[] {
    return this.subjectTypes;
  }


}

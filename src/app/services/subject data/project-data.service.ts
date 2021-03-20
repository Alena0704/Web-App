import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProjectData} from '../../Interfaces/i-project-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  private url = '';

  constructor(private http: HttpClient) {
  }

  getProjectData(): Observable<IProjectData[]> {
  return this.http.get<IProjectData[]>(this.url);
  }

}

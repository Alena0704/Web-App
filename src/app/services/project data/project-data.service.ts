import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProjectData} from '../../Interfaces/i-project-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  private url = '/api/data';
  private data: any;

  constructor(private http: HttpClient) {
  }

  getObserveData(): Observable<IProjectData[]> {
    return this.http.get<IProjectData[]>(this.url);
  }

  getData(): IProjectData[] {
    return this.data;
  }

  setProjectData(): void {
    this.getObserveData()
      .subscribe(data => this.data = data);
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITableData} from '../../Interfaces/i-table/i-table-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  private url = '/api/data';
  private data: any;

  constructor(private http: HttpClient) {
  }

  getObserveData(): Observable<ITableData[]> {
    return this.http.get<ITableData[]>(this.url);
  }

  getData(): ITableData[] {
    return this.data;
  }

  setProjectData(): void {
    this.getObserveData()
      .subscribe(data => this.data = data);
  }

}

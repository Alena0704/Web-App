import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITableData} from '../../Interfaces/i-table/i-table-data';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  private url = '/api/data';

  constructor(private http: HttpClient) {
  }

  getObserveData(): Observable<ITableData[]> {
    return this.http.get<ITableData[]>(this.url);
  }
}

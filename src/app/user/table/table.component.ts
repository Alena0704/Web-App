import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {HttpClient} from '@angular/common/http';
import {TableDataService} from '../../shared/services/table data/table-data.service';
import {ITableData} from '../../shared/Interfaces/i-table/i-table-data';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {

  dataLoaded: boolean;
  displayedColumns: string[] = ['subject', 'material', 'matType', 'task', 'avgScore'];
  dataSource = new MatTableDataSource<ITableData>(); // getting data from ProjectDataService
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private http: HttpClient, private serviceData: TableDataService) {
    this.dataLoaded = false; // We've not loaded the data yet
  }

  ngOnInit(): void {
    this.serviceData.getObserveData()
      .then(data => {
        this.dataSource.data = data;
        this.dataLoaded = true; // We've loaded all data
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}


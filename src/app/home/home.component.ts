import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface ProjectData {
  id: number;
  workTitle: string;
  endDate: string;
  classType: string;
  studyLink: string;
  result: string;
  source_: string;
  recommends: string;
}

const ELEMENT_DATA: ProjectData[] = [
  {
    id: 1,
    workTitle: 'Я',
    endDate: 'EPTODAY',
    classType: 'lecture',
    studyLink: 'https://achika.herokuapp.com/',
    result: '1Pizdec',
    source_: 'source',
    recommends: '3'
  },
  {
    id: 2,
    workTitle: 'СЕЙЧАС',
    endDate: 'EPTODAY',
    classType: 'lecture',
    studyLink: 'https://achika.herokuapp.com/',
    result: '2Pizdec',
    source_: 'source',
    recommends: '4'
  },
  {
    id: 3,
    workTitle: 'ВЫПИЛЮСЬ',
    endDate: 'EPTODAY',
    classType: 'lecture',
    studyLink: 'https://achika.herokuapp.com/',
    result: '3Pizdec',
    source_: 'source',
    recommends: '5'
  },
  {
    id: 4,
    workTitle: 'А',
    endDate: 'EPTODAY',
    classType: 'lecture',
    studyLink: 'https://achika.herokuapp.com/',
    result: '4Pizdec',
    source_: 'source',
    recommends: '2'
  },
  {
    id: 5,
    workTitle: 'НЕТ',
    endDate: 'EPTODAY',
    classType: 'lecture',
    studyLink: 'https://achika.herokuapp.com/',
    result: '5Pizdec',
    source_: 'source',
    recommends: '1'
  },
  {
    id: 6,
    workTitle: 'Я',
    endDate: 'EPTODAY',
    classType: 'lecture',
    studyLink: 'https://achika.herokuapp.com/',
    result: '6Pizdec',
    source_: 'source',
    recommends: '0'
  },
  {
    id: 7,
    workTitle: 'ВСКРОЮ',
    endDate: 'EPTODAY',
    classType: 'lecture',
    studyLink: 'https://achika.herokuapp.com/',
    result: '7Pizdec',
    source_: 'source',
    recommends: '6'
  },
  {
    id: 8,
    workTitle: 'Чикадрило',
    endDate: 'Тупой',
    classType: 'Бездарный',
    studyLink: 'Хуесос',
    result: 'И',
    source_: 'Гнилой',
    recommends: 'Аутист'
  }
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor() {

  }

  displayedColumns: string[] = ['id', 'workTitle', 'endDate', 'classType', 'studyLink', 'result', 'source_', 'recommends'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort = new MatSort();


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



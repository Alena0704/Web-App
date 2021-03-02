import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {DemoMaterialModule} from '../material-module';

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
  {id: 1, workTitle: 'Я', endDate: 'EPTODAY', classType: 'lecture', studyLink: 'https://achika.herokuapp.com/', result: '1Pizdec', source_: 'source', recommends: '3'},
  {id: 2, workTitle: 'СЕЙЧАС', endDate: 'EPTODAY', classType: 'lecture', studyLink: 'https://achika.herokuapp.com/', result: '2Pizdec', source_: 'source', recommends: '4'},
  {id: 3, workTitle: 'ВЫПИЛЮСЬ', endDate: 'EPTODAY', classType: 'lecture', studyLink: 'https://achika.herokuapp.com/', result: '3Pizdec', source_: 'source', recommends: '5'},
  {id: 4, workTitle: 'А', endDate: 'EPTODAY', classType: 'lecture', studyLink: 'https://achika.herokuapp.com/', result: '4Pizdec', source_: 'source', recommends: '2'},
  {id: 5, workTitle: 'НЕТ', endDate: 'EPTODAY', classType: 'lecture', studyLink: 'https://achika.herokuapp.com/', result: '5Pizdec', source_: 'source', recommends: '1'},
  {id: 6, workTitle: 'Я', endDate: 'EPTODAY', classType: 'lecture', studyLink: 'https://achika.herokuapp.com/', result: '6Pizdec', source_: 'source', recommends: '0'},
  {id: 7, workTitle: 'ВСКРОЮСЬ', endDate: 'EPTODAY', classType: 'lecture', studyLink: 'https://achika.herokuapp.com/', result: '7Pizdec', source_: 'source', recommends: '6'}
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

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}



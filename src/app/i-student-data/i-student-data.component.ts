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
    id: 4,
    workTitle: 'Расчет срока окупаемости проекта',
    endDate: '12.05.2020',
    classType: 'Задание',
    studyLink: 'https://task1.ru/',
    result: '4',
    source_: 'Методы анализа проектных решений',
    recommends: 'Формулы верны. Посмотрите внимательней арифметичесие расчеты'
  },
  {
    id: 54,
    workTitle: 'Метод анализа иерархий Саати',
    endDate: '12.05.2020',
    classType: 'Задание',
    studyLink: 'https://task2.com/',
    result: '5',
    source_: 'Методы анализа проектных решений',
    recommends: 'Некоторые критерии между участниками перепутаны'
  },
  {
    id: 14,
    workTitle: 'Теоретические основы организационных изменений компании',
    endDate: '12.05.2020',
    classType: 'Тест',
    studyLink: 'https://test1.com/',
    result: '4',
    source_: 'Технологии поиска реализаций проектных решений',
    recommends: 'Кажется вам стоит посмотреть внимательно, что подразумевается под управляемостью компании, структурой управления и конкуретноспособностью на рынке'
  },
];
@Component({
  selector: 'app-table',
  templateUrl: './i-student-data.component.html',
  styleUrls: ['./i-student-data.component.css']
})
export class IStudentDataComponent implements AfterViewInit {
  dataSource = new MatTableDataSource();
  constructor() {
    this.dataSource.data = ELEMENT_DATA;
  }
  displayedColumns: string[] = ['id', 'workTitle', 'endDate', 'classType', 'studyLink', 'result', 'source_', 'recommends'];

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

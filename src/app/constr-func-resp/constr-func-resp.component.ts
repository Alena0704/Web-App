import {AfterViewInit, Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {IFuncResp} from '../shared/Interfaces/i-func-responce/i-func-resp';


export interface ProjectData {
  understand: number;
  ability: number;
  skill: number;
  mark: number;
}
const ELEMENT_DATA: ProjectData[] = [
  {
    understand: 5,
    ability: 5,
    skill: 5,
    mark: 5
  },
  {
    understand: 5,
    ability: 4,
    skill: 5,
    mark: 5
  },
  {
    understand: 5,
    ability: 5,
    skill: 4,
    mark: 5
  },
  {
    understand: 5,
    ability: 4,
    skill: 4,
    mark: 4
  },
  {
    understand: 4,
    ability: 5,
    skill: 5,
    mark: 4
  },
  {
    understand: 5,
    ability: 4,
    skill: 5,
    mark: 5
  },
  {
    understand: 4,
    ability: 4,
    skill: 5,
    mark: 4
  },
  {
    understand: 3,
    ability: 4,
    skill: 5,
    mark: 4
  }
];

@Component({
  selector: 'app-constr-func-resp',
  templateUrl: './constr-func-resp.component.html',
  styleUrls: ['./constr-func-resp.component.css']
})
export class ConstrFuncRespComponent implements AfterViewInit {
  constructor() {
    this.dataSource.data = ELEMENT_DATA;

  }
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['understand', 'ability', 'skill', 'mark'];


  ngAfterViewInit(): void {
  }
}

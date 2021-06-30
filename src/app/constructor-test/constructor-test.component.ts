import { Component, OnInit } from '@angular/core';

export interface Question{
  name: string;
  answers: Answer[];
}
export interface Answer{
  name: string;
  wrong: boolean;
}
@Component({
  selector: 'app-constructor-test',
  templateUrl: './constructor-test.component.html',
  styleUrls: ['./constructor-test.component.css']
})

export class ConstructorTestComponent{
  question_ = '';
  answer = '';
  constructor() {
    this.question_ = '';
  }
  Questions: Question[] = [];


  // tslint:disable-next-line:typedef
  onClick(){
    this.Questions.push({name: this.question_, answers: []});
    this.question_ = '';
  }
}

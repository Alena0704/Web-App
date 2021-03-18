import {Component} from '@angular/core';

interface FileType {
  type: string;
}

interface Subject {
  title: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor() {
    this.selectedType = 'not selected';
    this.selectedSubject = 'not selected';
  }

  selectedType: string;
  selectedSubject: string;


  fileTypes: FileType[] = [
    {type: 'Лекция'},
    {type: 'Семинар'},
    {type: 'Тест'},
    {type: 'Задание'}
  ];

  subjects: Subject[] = [
    {title: 'КТАДС'},
    {title: 'ТОАУ'}
  ];

}

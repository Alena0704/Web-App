import {Component, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  constructor(private http: HttpClient) {
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
  fileToUpload: any = null;

  upload(): void {
    this.http.post('/api/upload', 'hello')
      .subscribe(data => {
        console.log(data);
      });
  }
}

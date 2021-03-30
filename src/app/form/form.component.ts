import {Component, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

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
    this.taskName = 'not named';
    this.selectedType = 'not selected';
    this.selectedSubject = 'not selected';
  }

  selectedType: string;
  selectedSubject: string;
  taskName: string;
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
    const nameFromId = document.getElementById('taskName') as HTMLInputElement;
    this.taskName = nameFromId.value;

    const testData = [
      {
        task: this.taskName,
        selectedType: this.selectedType,
        selectedSubject: this.selectedSubject
      }
    ];
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    this.http.post('/api/upload', testData, httpOptions)
      .subscribe();
  }
}

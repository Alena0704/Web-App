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
    console.log('entered task name: ' + this.taskName);
    const testData = [
      {task: this.taskName},
      {selectedType: this.selectedType},
      {selectedSubject: this.selectedSubject}
    ];
    this.http.post<any>('http://localhost:8080/api/upload', JSON.stringify(testData))
      .subscribe(data => {
        data = testData;
        console.log('front:' + data);
      });
  }
}

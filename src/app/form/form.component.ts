import {Component, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


interface Subject {
  name: string;
}

interface SubjectType {
  type: string;
}

interface TaskType {
  task: string;
}


interface FormData {
  title: string;
  type: string;
  task: string;
  subName: string;
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
    this.selectedTask = 'not selected';
  }

  taskName: string; // название предмета
  selectedType: string; // Тип предмета
  selectedTask: string; // Тип задания
  selectedSubject: string; // Название предмета


  subjectType: SubjectType[] = [
    {type: 'Лекция'},
    {type: 'Семинар'}
  ];

  taskType: TaskType[] = [
    {task: 'Тест'},
    {task: 'Задание'}
  ];

  subjects: Subject[] = [
    {name: 'КТАДС'},
    {name: 'ТОАУ'}
  ];

  fileToUpload: any = null;

  upload(): void {
    const nameFromId = document.getElementById('taskName') as HTMLInputElement;
    this.taskName = nameFromId.value.toString();
    const testData: FormData =
      {
        title: this.taskName,
        type: this.selectedType,
        task: this.selectedTask,
        subName: this.selectedSubject
      };

    console.log('selected data (json stringify): \n' + JSON.stringify(testData));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    this.http.post('/api/upload', testData, httpOptions)
      .subscribe();
  }
}

import {Component, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {FormDataService} from '../services/form data/form-data.service';
import {IFormSubMat} from '../Interfaces/i-form-SubMat';


const PLUS_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
`;

interface Subject {
  name: string;
}

interface MatType {
  type: string;
}

interface SubType {
  task: string;
}


interface FormData {
  subject: string;
  matType: string;
  taskTitle: string;
  taskType: string;
  comment: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  constructor(private http: HttpClient, iconRegistry: MatIconRegistry,
              private formDataService: FormDataService, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('plus-circle', sanitizer.bypassSecurityTrustHtml(PLUS_ICON));
    this.formData = {
      subject: '',
      matType: '',
      taskTitle: '',
      taskType: '',
      comment: ''
    };
    formDataService.getObserveData().subscribe(data => this.subjectMaterial = data);
  }

  formData: FormData;
  subjectMaterial: IFormSubMat[] = [];


  subjects: Subject[] = [
    {name: 'КТАДС'},
    {name: 'ТОАУ'}
  ];

  matTypes: MatType[] = [
    {type: 'Лекция'},
    {type: 'Семинар'}
  ];


  taskTypes: SubType[] = [
    {task: 'Тест'},
    {task: 'Задание'}
  ];

  filterUniqueSubjects(): IFormSubMat[] {
    return this.subjectMaterial.filter(
      (thing, i, arr) =>
        arr.findIndex(t => t.subject === thing.subject) === i);
  }

  filterMatFromSub(item: string): IFormSubMat[] {
    return this.subjectMaterial.filter(x => x.subject === item);
  }

  upload(): void {
    console.log(this.subjectMaterial);
    const nameFromId = document.getElementById('taskTitle') as HTMLInputElement;
    const commentFromId = document.getElementById('comment') as HTMLInputElement;
    this.formData.taskTitle = nameFromId.value.toString();
    this.formData.comment = commentFromId.value.toString();


    console.log('selected data (json stringify): \n' + JSON.stringify(this.formData));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    this.http.post('/api/upload', this.formData, httpOptions)
      .subscribe();
  }
}

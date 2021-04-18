import {Component, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {FormDataService} from '../../shared/services/form data/form-data.service';
import {IFormInput} from '../../shared/Interfaces/i-form/i-form-input';
import {IFormData} from '../../shared/Interfaces/i-form/i-form-data';
import {IFormTaskType} from '../../shared/Interfaces/i-form/i-form-task-type';
import {Observable} from 'rxjs';


const PLUS_ICON = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
`;


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  selectedData: IFormData = {} as IFormData;
  subMatOptions: IFormInput[] = []; // options to choose from (subjects,matTypes)
  taskTypes: IFormTaskType[] = []; // fourth input

  constructor(private http: HttpClient, iconRegistry: MatIconRegistry,
              private formDataService: FormDataService, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('plus-circle', sanitizer.bypassSecurityTrustHtml(PLUS_ICON));
    formDataService.getObserveFormData().subscribe(data => this.subMatOptions = data);
    this.taskTypes = formDataService.getTaskTypes();
  }

  filterUniqueSubjects(): IFormInput[] {
    return this.subMatOptions.filter(
      (thing, i, arr) =>
        arr.findIndex(t => t.subject === thing.subject) === i);
  }

  filterMatFromSub(item: string): IFormInput[] {
    return this.subMatOptions.filter(x => x.subject === item);
  }

  upload(): void {
    const nameFromId = document.getElementById('taskTitle') as HTMLInputElement;
    const commentFromId = document.getElementById('comment') as HTMLInputElement;
    this.selectedData.taskTitle = nameFromId.value.toString();
    this.selectedData.comment = commentFromId.value.toString();
    this.formDataService.postFormData(this.selectedData);
  }
}

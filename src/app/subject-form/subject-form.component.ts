import {Component} from '@angular/core';
import {ISubjectForm} from '../shared/Interfaces/subject-form/i-subject-form';
import {FormGroup, FormControl} from '@angular/forms';

interface ITeacher {
  fullName: string;
}

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent {
  formData: ISubjectForm = {} as ISubjectForm;
  teachers: ITeacher[];
  subject = '';
  teacher = '';


  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor() {
    this.teachers = [
      {fullName: 'Добрынин Владимир Николаевич'},
      {fullName: 'Махалкина Татьяна Олеговна'},
      {fullName: 'Миловидова Анна Александровна'}
    ];

  }

  sendToDB(): void {
    this.formData = {
      subject: (document.getElementById('subject') as HTMLInputElement).value.toString(),
      teacher: this.teacher,
      startDate: this.range.value.start,
      endDate: this.range.value.end
    };
    console.log(JSON.stringify(this.formData));
    // TODO
  }
}

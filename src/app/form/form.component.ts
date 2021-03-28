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


  fileName = '';

  onFileSelected(event: any): void {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append('thumbnail', file);

      this.http.put('http://localhost:8080/api/upload', formData)
        .subscribe(data => {
          console.log(data);
        });
      // upload$.subscribe();
    }
  }

}

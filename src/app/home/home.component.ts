import {Component, OnInit} from '@angular/core';

export interface Suk {
  "ID_работы": string,
  "Название работы": string,
  "Дата сдачи": string,
  "Тип": string,
  "Просмотр": string,
  "Результат": string,
  "Источники": string,
  "Рекомендации": string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  testCol = ["c1", "c2", "c3"]
  testRow: any = ["r1", "r2", "r3"]


  columns = [
    "ID_работы",
    "Название работы",
    "Дата сдачи",
    "Тип",
    "Просмотр",
    "Результат",
    "Источники",
    "Рекомендации"
  ]

  //skill, understanding, knowledge (suk)
  suk: any = [{
    "ID_работы": 'айди',
    "Название работы": 'задание',
    "Дата сдачи": 'дата окончения',
    "Тип": 'тип занятия',
    "Просмотр": 'ссылка на изучение',
    "Результат": 'результат',
    "Источники": 'источники',
    "Рекомендации": 'рекомендации'
  },
    {
      "ID_работы": 'айди',
      "Название работы": 'задание',
      "Дата сдачи": 'дата окончения',
      "Тип": 'тип занятия',
      "Просмотр": 'ссылка на изучение',
      "Результат": 'результат',
      "Источники": 'источники',
      "Рекомендации": 'рекомендации'
    }]


  ngOnInit(): void {
  }

}

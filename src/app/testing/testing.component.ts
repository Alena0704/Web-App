import {AfterViewInit, Component} from '@angular/core';
import {ITestRun} from '../shared/Interfaces/i-test-run/i-test-run';
// tslint:disable-next-line:class-name
export interface Question_task{
  id_task: number;
  question_task: string;
  questions: Question[];
}
export interface Question {
  id_question: number;
  question: string;
  answers: Answer[];
}

export interface Answer{
  id_answer: number;
  answer: string;
  wrong: boolean;
}
const ELEMENT_DATA: Question_task[] = [
  {
    id_task: 1,
    question_task: 'Фирма планирует развертывание новой автоматизированной системы управления (АСУ), стоимость развертывания которой вместе с отладкой составит 1500000 рублей. Ожидается, что внедрение АСУ обеспечит получение на протяжении 6 лет чистых доходов в 300000, 300000, 400000, 400000, 500000 и 400000 руб. соответственно. Минимальный гарантированный уровень доходности составляет 9%, темп инфляции – 7%, коэффициент, учитывающий степень риска – 0,08. Определите норму дисконта и срок окупаемости проекта. Выберите из вариантов ответов выявленные вами наблюдения:',
    questions:
    [
      {
        id_question: 1,
        question: 'Расходы на проект:',
        answers:
        [
          {
            id_answer: 1,
            answer: 'Виден незначительный рост стоимости проектов',
            wrong: true
          },
          {
            id_answer: 2,
            answer: 'Видно незначительное падение стоимости проектов',
            wrong: false
          },
          {
            id_answer: 3,
            answer: 'Стоимость проектов ни растет, ни падает',
            wrong: false
          }
        ]
      },
      {
        id_question: 2,
        question: 'Что вы скажите про плановую длительность проекта?',
        answers:
        [
          {
            id_answer: 1,
            answer: 'Увеличение времени на выполнение проектов',
            wrong: true
          },
          {
            id_answer: 2,
            answer: 'Уменьшение времени на выполнение проектов',
            wrong : false
          },
          {
            id_answer: 3,
            answer: 'Длительность проектов осталась той же',
            wrong: false
          }
        ]
      },
      {
        id_question: 3,
        question: 'Что можно сказать про количество людей, которые занимают должности не по специальности?',
        answers:
        [
          {
            id_answer: 1,
            answer: 'Их количество растет',
            wrong: true,
          },
          {
            id_answer: 2,
            answer: 'Их количество уменьшается',
            wrong: false
          },
          {
            id_answer: 3,
            answer: 'Их количество не изменяется',
            wrong: false
          }
        ]
      }
    ]
  }
];
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
  }
}

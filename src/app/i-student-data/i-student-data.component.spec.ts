import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IStudentDataComponent } from './i-student-data.component';

describe('IStudentDataComponent', () => {
  let component: IStudentDataComponent;
  let fixture: ComponentFixture<IStudentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IStudentDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IStudentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

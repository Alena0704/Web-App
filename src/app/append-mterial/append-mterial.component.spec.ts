import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppendMterialComponent } from './append-mterial.component';

describe('AppendMterialComponent', () => {
  let component: AppendMterialComponent;
  let fixture: ComponentFixture<AppendMterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppendMterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppendMterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

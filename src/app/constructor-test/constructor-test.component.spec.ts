import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorTestComponent } from './constructor-test.component';

describe('ConstructorTestComponent', () => {
  let component: ConstructorTestComponent;
  let fixture: ComponentFixture<ConstructorTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructorTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

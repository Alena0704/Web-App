import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrFuncRespComponent } from './constr-func-resp.component';

describe('ConstrFuncRespComponent', () => {
  let component: ConstrFuncRespComponent;
  let fixture: ComponentFixture<ConstrFuncRespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstrFuncRespComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstrFuncRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

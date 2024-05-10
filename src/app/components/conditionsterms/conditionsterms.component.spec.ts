import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionstermsComponent } from './conditionsterms.component';

describe('ConditionstermsComponent', () => {
  let component: ConditionstermsComponent;
  let fixture: ComponentFixture<ConditionstermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionstermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionstermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

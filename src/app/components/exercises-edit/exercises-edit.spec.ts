import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesEdit } from './exercises-edit';

describe('ExercisesEdit', () => {
  let component: ExercisesEdit;
  let fixture: ComponentFixture<ExercisesEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercisesEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercisesEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

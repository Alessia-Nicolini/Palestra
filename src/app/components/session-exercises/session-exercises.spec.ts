import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionExercises } from './session-exercises';

describe('SessionExercises', () => {
  let component: SessionExercises;
  let fixture: ComponentFixture<SessionExercises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionExercises]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionExercises);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

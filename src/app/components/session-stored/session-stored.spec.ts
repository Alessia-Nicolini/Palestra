import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionStored } from './session-stored';

describe('SessionStored', () => {
  let component: SessionStored;
  let fixture: ComponentFixture<SessionStored>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionStored]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionStored);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

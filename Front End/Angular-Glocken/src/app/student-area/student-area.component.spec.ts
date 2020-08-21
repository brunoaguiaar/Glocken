import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAreaComponent } from './student-area.component';

describe('StudentAreaComponent', () => {
  let component: StudentAreaComponent;
  let fixture: ComponentFixture<StudentAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

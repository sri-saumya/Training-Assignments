import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectcompComponent } from './subjectcomp.component';

describe('SubjectcompComponent', () => {
  let component: SubjectcompComponent;
  let fixture: ComponentFixture<SubjectcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

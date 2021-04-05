import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDSComponent } from './parent-ds.component';

describe('ParentDSComponent', () => {
  let component: ParentDSComponent;
  let fixture: ComponentFixture<ParentDSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentDSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

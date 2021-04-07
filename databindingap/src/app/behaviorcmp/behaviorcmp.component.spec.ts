import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorcmpComponent } from './behaviorcmp.component';

describe('BehaviorcmpComponent', () => {
  let component: BehaviorcmpComponent;
  let fixture: ComponentFixture<BehaviorcmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorcmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

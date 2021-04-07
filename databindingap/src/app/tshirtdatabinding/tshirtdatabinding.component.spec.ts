import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtdatabindingComponent } from './tshirtdatabinding.component';

describe('TshirtdatabindingComponent', () => {
  let component: TshirtdatabindingComponent;
  let fixture: ComponentFixture<TshirtdatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TshirtdatabindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TshirtdatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

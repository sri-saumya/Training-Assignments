import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynccmpComponent } from './asynccmp.component';

describe('AsynccmpComponent', () => {
  let component: AsynccmpComponent;
  let fixture: ComponentFixture<AsynccmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynccmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynccmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

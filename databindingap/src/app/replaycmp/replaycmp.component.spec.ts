import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaycmpComponent } from './replaycmp.component';

describe('ReplaycmpComponent', () => {
  let component: ReplaycmpComponent;
  let fixture: ComponentFixture<ReplaycmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplaycmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaycmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

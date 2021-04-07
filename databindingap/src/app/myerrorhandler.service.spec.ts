import { TestBed } from '@angular/core/testing';

import { MyerrorhandlerService } from './myerrorhandler.service';

describe('MyerrorhandlerService', () => {
  let service: MyerrorhandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyerrorhandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

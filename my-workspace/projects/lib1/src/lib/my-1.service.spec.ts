import { TestBed } from '@angular/core/testing';

import { My1Service } from './my-1.service';

describe('My1Service', () => {
  let service: My1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(My1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

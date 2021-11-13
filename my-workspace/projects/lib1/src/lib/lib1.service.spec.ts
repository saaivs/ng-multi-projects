import { TestBed } from '@angular/core/testing';

import { Lib1Service } from './lib1.service';

describe('Lib1Service', () => {
  let service: Lib1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

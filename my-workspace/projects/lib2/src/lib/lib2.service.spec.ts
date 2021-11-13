import { TestBed } from '@angular/core/testing';

import { Lib2Service } from './lib2.service';

describe('Lib2Service', () => {
  let service: Lib2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

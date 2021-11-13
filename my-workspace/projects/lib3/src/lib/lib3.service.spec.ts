import { TestBed } from '@angular/core/testing';

import { Lib3Service } from './lib3.service';

describe('Lib3Service', () => {
  let service: Lib3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

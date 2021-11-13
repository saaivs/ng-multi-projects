import { TestBed } from '@angular/core/testing';

import { My3Service } from './my-3.service';

describe('My3Service', () => {
  let service: My3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(My3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

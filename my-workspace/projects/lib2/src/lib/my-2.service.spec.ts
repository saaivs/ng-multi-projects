import { TestBed } from '@angular/core/testing';

import { My2Service } from './my-2.service';

describe('My2Service', () => {
  let service: My2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(My2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { Lib1Service } from './lib1.service';

describe('Lib1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Lib1Service]
    });
  });

  it('should be created', inject([Lib1Service], (service: Lib1Service) => {
    expect(service).toBeTruthy();
  }));
});

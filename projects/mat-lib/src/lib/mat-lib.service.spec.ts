import { TestBed, inject } from '@angular/core/testing';

import { MatLibService } from './mat-lib.service';

describe('MatLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatLibService]
    });
  });

  it('should be created', inject([MatLibService], (service: MatLibService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { CommonLibService } from './common-lib.service';

describe('CommonLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonLibService]
    });
  });

  it('should be created', inject([CommonLibService], (service: CommonLibService) => {
    expect(service).toBeTruthy();
  }));
});

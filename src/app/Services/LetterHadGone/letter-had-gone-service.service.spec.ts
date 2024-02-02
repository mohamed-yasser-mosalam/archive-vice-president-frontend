import { TestBed } from '@angular/core/testing';

import { LetterHadGoneServiceService } from './letter-had-gone-service.service';

describe('LetterHadGoneServiceService', () => {
  let service: LetterHadGoneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetterHadGoneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

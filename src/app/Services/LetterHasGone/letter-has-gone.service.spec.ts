import { TestBed } from '@angular/core/testing';

import { LetterHasGoneService } from './letter-has-gone.service';

describe('LetterHasGoneService', () => {
  let service: LetterHasGoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetterHasGoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LetterNotGoneService } from './letter-not-gone.service';

describe('LetterNotGoneService', () => {
  let service: LetterNotGoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetterNotGoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

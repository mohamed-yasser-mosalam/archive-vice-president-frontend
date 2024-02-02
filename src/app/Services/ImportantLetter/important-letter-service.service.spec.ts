import { TestBed } from '@angular/core/testing';

import { ImportantLetterServiceService } from './important-letter-service.service';

describe('ImportantLetterServiceService', () => {
  let service: ImportantLetterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportantLetterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

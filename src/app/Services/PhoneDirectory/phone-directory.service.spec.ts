import { TestBed } from '@angular/core/testing';

import { PhoneDirectoryService } from './phone-directory.service';

describe('PhoneDirectoryService', () => {
  let service: PhoneDirectoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneDirectoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

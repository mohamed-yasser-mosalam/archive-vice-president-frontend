import { TestBed } from '@angular/core/testing';

import { UpdateUserInformationService } from './update-user-information.service';

describe('UpdateUserInformationService', () => {
  let service: UpdateUserInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateUserInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

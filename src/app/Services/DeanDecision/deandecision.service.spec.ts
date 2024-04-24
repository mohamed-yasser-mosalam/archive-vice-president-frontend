import { TestBed } from '@angular/core/testing';

import { DeandecisionService } from './deandecision.service';

describe('DeandecisionService', () => {
  let service: DeandecisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeandecisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

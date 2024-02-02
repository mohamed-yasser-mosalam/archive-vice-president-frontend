import { TestBed } from '@angular/core/testing';

import { TodayServiceService } from './today-service.service';

describe('TodayServiceService', () => {
  let service: TodayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HttpInterceterBaseAuthService } from './http-interceter-base-auth.service';

describe('HttpInterceterBaseAuthService', () => {
  let service: HttpInterceterBaseAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceterBaseAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

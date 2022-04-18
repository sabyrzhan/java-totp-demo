import { TestBed } from '@angular/core/testing';

import { OtpSecretResolverService } from './otp-secret-resolver.service';

describe('OtpSecretResolverService', () => {
  let service: OtpSecretResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtpSecretResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

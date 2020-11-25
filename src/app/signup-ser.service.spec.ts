import { TestBed } from '@angular/core/testing';

import { SignupSerService } from './signup-ser.service';

describe('SignupSerService', () => {
  let service: SignupSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

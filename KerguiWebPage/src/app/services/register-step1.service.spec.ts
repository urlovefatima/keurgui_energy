import { TestBed } from '@angular/core/testing';

import { RegisterStep1Service } from './register-step1.service';

describe('RegisterStep1Service', () => {
  let service: RegisterStep1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterStep1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

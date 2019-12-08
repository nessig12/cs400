import { TestBed } from '@angular/core/testing';

import { HpconnectService } from './hpconnect.service';

describe('HpconnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HpconnectService = TestBed.get(HpconnectService);
    expect(service).toBeTruthy();
  });
});

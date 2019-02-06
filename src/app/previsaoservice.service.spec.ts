import { TestBed } from '@angular/core/testing';

import { PrevisaoserviceService } from './previsaoservice.service';

describe('PrevisaoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrevisaoserviceService = TestBed.get(PrevisaoserviceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { KosarService } from './kosar.service';

describe('KosárService', () => {
  let service: KosarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KosarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

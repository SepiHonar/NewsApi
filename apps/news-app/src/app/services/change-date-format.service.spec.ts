import { TestBed } from '@angular/core/testing';

import { ChangeDateFormatService } from './change-date-format.service';

describe('ChangeDateFormatService', () => {
  let service: ChangeDateFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeDateFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

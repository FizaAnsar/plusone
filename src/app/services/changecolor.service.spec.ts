import { TestBed } from '@angular/core/testing';

import { ChangecolorService } from './changecolor.service';

describe('ChangecolorService', () => {
  let service: ChangecolorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangecolorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

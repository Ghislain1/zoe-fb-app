import { TestBed } from '@angular/core/testing';

import { MakeService } from './make.service';

describe('MakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MakeService = TestBed.get(MakeService);
    expect(service).toBeTruthy();
  });
});

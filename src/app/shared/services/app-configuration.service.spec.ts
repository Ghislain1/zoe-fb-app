import { TestBed } from '@angular/core/testing';

import { AppConfigurationService } from './app-configuration.service';

describe('AppConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppConfigurationService = TestBed.get(AppConfigurationService);
    expect(service).toBeTruthy();
  });
});

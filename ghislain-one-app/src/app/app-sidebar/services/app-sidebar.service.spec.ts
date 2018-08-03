import { TestBed, inject } from '@angular/core/testing';

import { AppSidebarService } from './app-sidebar.service';

describe('AppSidebarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppSidebarService]
    });
  });

  it('should be created', inject([AppSidebarService], (service: AppSidebarService) => {
    expect(service).toBeTruthy();
  }));
});

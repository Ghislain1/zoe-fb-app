import { TestBed, inject } from '@angular/core/testing';

import { HeroXmlService } from './hero-xml.service';

describe('HeroXmlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroXmlService]
    });
  });

  it('should be created', inject([HeroXmlService], (service: HeroXmlService) => {
    expect(service).toBeTruthy();
  }));
});

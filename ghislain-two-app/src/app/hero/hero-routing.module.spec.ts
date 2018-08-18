import { HeroRoutingModule } from './hero-routing.module';

describe('HeroRoutingModule', () => {
  let heroRoutingModule: HeroRoutingModule;

  beforeEach(() => {
    heroRoutingModule = new HeroRoutingModule();
  });

  it('should create an instance', () => {
    expect(heroRoutingModule).toBeTruthy();
  });
});

import { TopologyModule } from './topology.module';

describe('TopologyModule', () => {
  let topologyModule: TopologyModule;

  beforeEach(() => {
    topologyModule = new TopologyModule();
  });

  it('should create an instance', () => {
    expect(topologyModule).toBeTruthy();
  });
});

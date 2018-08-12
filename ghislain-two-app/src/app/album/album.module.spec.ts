import { AlbumModule } from './album.module';

describe('AlbumModule', () => {
  let albumModule: AlbumModule;

  beforeEach(() => {
    albumModule = new AlbumModule();
  });

  it('should create an instance', () => {
    expect(albumModule).toBeTruthy();
  });
});

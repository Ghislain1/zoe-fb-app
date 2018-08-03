import { AppSidebarModule } from './app-sidebar.module';

describe('AppSidebarModule', () => {
  let appSidebarModule: AppSidebarModule;

  beforeEach(() => {
    appSidebarModule = new AppSidebarModule();
  });

  it('should create an instance', () => {
    expect(appSidebarModule).toBeTruthy();
  });
});

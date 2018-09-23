namespace ComStudio.Modules.Startpage
{
    using ComStudio.Infrastructure;
    using ComStudio.Modules.Startpage.Views;
    using Microsoft.Practices.Unity;
    using Prism.Modularity;
    using Prism.Regions;
    using System;
    using System.IO;

    public class StartpageModule : IModule
    {
        private readonly IUnityContainer container;
        private readonly IRegionManager regionManager;

        public StartpageModule(IUnityContainer container, IRegionManager regionManager)
        {
            this.container = container;
            this.regionManager = regionManager;

            //TODO: GHislain WHy do you do that?
            //What doses the Value  <CefSharpAnyCpuSupport>true</CefSharpAnyCpuSupport> in csproject of startpage?
            // Can you do the sequence diagram for that?
            CefSetupHelper.SetupCefSharpForWpf();
        }

        public void Initialize()
        {
            this.regionManager.RegisterViewWithRegion(RegionNames.MainRegion,
                                             () => this.container.Resolve<StartpageView>());
        }
    }
}
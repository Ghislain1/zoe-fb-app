namespace ComStudio.Modules.Startpage
{
    using ComStudio.Infrastructure;
    using ComStudio.Modules.Startpage.Views;
    using Microsoft.Practices.Unity;
    using Prism.Ioc;
    using Prism.Modularity;
    using Prism.Regions;
    using System;
    using System.IO;

    public class StartpageModule : IModule
    {
        private readonly IContainerProvider containerProvider;
        private readonly IContainerRegistry containerRegistry;
        private readonly IRegionManager regionManager;

        public StartpageModule(IContainerRegistry containerRegistry, IContainerProvider containerProvider, IRegionManager regionManager)
        {
            this.containerRegistry = containerRegistry;
            this.regionManager = regionManager;
            this.containerProvider = containerProvider;
        }

        public void Initialize()
        {
            this.regionManager.RegisterViewWithRegion(RegionNames.MainRegion,
                                             () => this.containerProvider.Resolve<StartpageView>());
        }

        public void OnInitialized(IContainerProvider containerProvider)
        {
            this.Initialize();
        }

        public void RegisterTypes(IContainerRegistry containerRegistry)
        {
        }
    }
}
namespace ComStudio.Modules.Watch
{
    using ComStudio.Infrastructure;
    using ComStudio.Modules.Watch.Services;
    using ComStudio.Modules.Watch.ViewModels;
    using ComStudio.Modules.Watch.Views;
    using Microsoft.Practices.Unity;
    using Prism.Ioc;
    using Prism.Modularity;
    using Prism.Regions;

    public class WatchModule : IModule
    {
        private readonly IRegionManager regionManager;

        public WatchModule(IRegionManager regionManager)
        {
            this.regionManager = regionManager;
        }

        public void OnInitialized(IContainerProvider containerProvider)
        {
            this.regionManager.RegisterViewWithRegion(RegionNames.MainToolBarRegion,
                                                    () => containerProvider.Resolve<AddWatchView>());
            this.regionManager.RegisterViewWithRegion(RegionNames.MainRegion,
                                                       () => containerProvider.Resolve<WatchListView>());
        }

        public void RegisterTypes(IContainerRegistry containerRegistry)
        {
            this.Initialize(containerRegistry);
        }

        private void Initialize(IContainerRegistry containerRegistry)
        {
            containerRegistry.RegisterSingleton<IWatchListService, WatchListService>();
            containerRegistry.RegisterSingleton<AddWatchViewModel, AddWatchViewModel>();
            containerRegistry.RegisterSingleton<WatchListViewModel, WatchListViewModel>();
        }
    }
}
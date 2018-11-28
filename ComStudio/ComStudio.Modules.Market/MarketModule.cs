namespace ComStudio.Modules.Market
{
    using ComStudio.Infrastructure;
    using ComStudio.Infrastructure.Interfaces;
    using ComStudio.Modules.Market.Services;
    using ComStudio.Modules.Market.ViewModels;
    using ComStudio.Modules.Market.Views;
    using Prism.Ioc;
    using Prism.Modularity;
    using Prism.Regions;

    public class MarketModule : IModule
    {
        private readonly IRegionManager regionManager;

        public MarketModule(IRegionManager regionManager)
        {
            this.regionManager = regionManager;
        }

        public void Initialize(IContainerProvider containerProvider)
        {
            this.regionManager.RegisterViewWithRegion(RegionNames.ResearchRegion,

                                                       () => containerProvider.Resolve<TrendLineView>());
        }

        public void OnInitialized(IContainerProvider containerProvider)
        {
            this.Initialize(containerProvider);
        }

        public void RegisterTypes(IContainerRegistry containerRegistry)
        {
            containerRegistry.RegisterSingleton<IMarketFeedService, MarketFeedService>();

            containerRegistry.RegisterSingleton<IMarketHistoryService, MarketHistoryService>();

            containerRegistry.RegisterSingleton<TrendLineViewModel, TrendLineViewModel>();
        }
    }
}
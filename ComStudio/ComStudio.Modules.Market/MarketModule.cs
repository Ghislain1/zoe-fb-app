namespace ComStudio.Modules.Market
{
    using ComStudio.Infrastructure;
    using ComStudio.Infrastructure.Interfaces;
    using ComStudio.Modules.Market.Services;
    using ComStudio.Modules.Market.ViewModels;
    using ComStudio.Modules.Market.Views;
    using Microsoft.Practices.Unity;
    using Prism.Modularity;
    using Prism.Regions;

    public class MarketModule : IModule

    {
        private readonly IUnityContainer container;

        private readonly IRegionManager regionManager;

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]

        //private MainRegionController _mainRegionController;

        public MarketModule(IUnityContainer container, IRegionManager regionManager)

        {
            this.container = container;

            this.regionManager = regionManager;
        }

        public void Initialize()

        {
            this.container.RegisterType<IMarketFeedService, MarketFeedService>();

            this.container.RegisterType<IMarketHistoryService, MarketHistoryService>();

            this.container.RegisterType<TrendLineViewModel, TrendLineViewModel>();

            this.regionManager.RegisterViewWithRegion(RegionNames.ResearchRegion,

                                                       () => this.container.Resolve<TrendLineView>());

            //this._mainRegionController = this.container.Resolve<MainRegionController>();

            //this.regionManager.RegisterViewWithRegion(RegionNames.TabRegion,

            // () => this.container.Resolve<EmployeeDetailsView>());

            //this.regionManager.RegisterViewWithRegion(RegionNames.TabRegion,

            // () => this.container.Resolve<EmployeeProjectsView>());
        }
    }
}
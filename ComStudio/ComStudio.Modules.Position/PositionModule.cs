namespace ComStudio.Modules.Position
{
    using ComStudio.Infrastructure;
    using ComStudio.Infrastructure.Interfaces;
    using ComStudio.Modules.Position.Interfaces;
    using ComStudio.Modules.Position.Services;
    using ComStudio.Modules.Position.ViewModels;
    using ComStudio.Modules.Position.Views;
    using Microsoft.Practices.Unity;
    using Prism.Ioc;
    using Prism.Modularity;
    using Prism.Regions;

    public class PositionModule : IModule
    {
        private readonly IRegionManager regionManager;

        private OrdersController _ordersController;

        public PositionModule(IRegionManager regionManager)
        {
            this.regionManager = regionManager;
        }

        public void Initialize(IContainerRegistry containerRegistry)

        {
            containerRegistry.RegisterSingleton<IAccountPositionService, AccountPositionService>();

            containerRegistry.RegisterSingleton<IOrdersService, XmlOrdersService>();

            containerRegistry.RegisterSingleton<IOrdersController, OrdersController>();

            containerRegistry.RegisterSingleton<IObservablePosition, ObservablePosition>();

            containerRegistry.RegisterSingleton<IPositionSummaryViewModel, PositionSummaryViewModel>();

            // TODO GHislainthis.containerRegistry.RegisterType<IPositionPieChartViewModel, PositionPieChartViewModel>();
        }

        public void OnInitialized(IContainerProvider containerProvider)
        {
            this.regionManager.RegisterViewWithRegion(RegionNames.MainRegion,

                                                     () => containerProvider.Resolve<PositionSummaryView>());

            this._ordersController = containerProvider.Resolve<OrdersController>();
        }

        public void RegisterTypes(IContainerRegistry containerRegistry)
        {
            this.Initialize(containerRegistry);
        }
    }
}
namespace ComStudio.Modules.Position
{
    using ComStudio.Infrastructure;
    using ComStudio.Infrastructure.Interfaces;
    using ComStudio.Modules.Position.Interfaces;
    using ComStudio.Modules.Position.Services;
    using ComStudio.Modules.Position.ViewModels;
    using ComStudio.Modules.Position.Views;
    using Microsoft.Practices.Unity;
    using Prism.Modularity;
    using Prism.Regions;

    public class PositionModule : IModule
    {
        private readonly IUnityContainer container;

        private readonly IRegionManager regionManager;

        private OrdersController _ordersController;

        public PositionModule(IUnityContainer container, IRegionManager regionManager)

        {
            this.container = container;

            this.regionManager = regionManager;
        }

        public void Initialize()

        {
            this.container.RegisterType<IAccountPositionService, AccountPositionService>();

            this.container.RegisterType<IOrdersService, XmlOrdersService>();

            this.container.RegisterType<IOrdersController, OrdersController>();

            this.container.RegisterType<IObservablePosition, ObservablePosition>();

            this.container.RegisterType<IPositionSummaryViewModel, PositionSummaryViewModel>();

            // TODO GHislain this.container.RegisterType<IPositionPieChartViewModel, PositionPieChartViewModel>();

            this.regionManager.RegisterViewWithRegion(RegionNames.MainRegion,

                                                       () => this.container.Resolve<PositionSummaryView>());

            this._ordersController = this.container.Resolve<OrdersController>();
        }
    }
}
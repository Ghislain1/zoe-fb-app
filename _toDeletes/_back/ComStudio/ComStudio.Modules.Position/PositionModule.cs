namespace ComStudio.Modules.Position
{
    using ComStudio.Infrastructure.Interfaces;
    using ComStudio.Modules.Position.Services;
    using Microsoft.Practices.Unity;
    using Prism.Modularity;
    using Prism.Regions;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class PositionModule : IModule
    {
        private readonly IUnityContainer container;
        private readonly IRegionManager regionManager;
        // private OrdersController _ordersController;

        public PositionModule(IUnityContainer container, IRegionManager regionManager)
        {
            this.container = container;
            this.regionManager = regionManager;
        }

        public void Initialize()
        {
            this.container.RegisterType<IAccountPositionService, AccountPositionService>();
            //   this.container.RegisterType<IOrdersService, XmlOrdersService>();
            // this.container.RegisterType<IOrdersController, OrdersController>();
            // this.container.RegisterType<IObservablePosition, ObservablePosition>();
            //  this.container.RegisterType<IPositionSummaryViewModel, PositionSummaryViewModel>();
            // this.container.RegisterType<IPositionPieChartViewModel, PositionPieChartViewModel>();
            //this.regionManager.RegisterViewWithRegion(RegionNames.MainRegion,
            //                                           () => this.container.Resolve<PositionSummaryView>());
            //this._ordersController = this.container.Resolve<OrdersController>();
        }
    }
}
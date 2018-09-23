namespace ComStudio.Modules.Topology
{
    using ComStudio.Infrastructure;
    using ComStudio.Modules.Topology.Interfaces;
    using ComStudio.Modules.Topology.Services;
    using ComStudio.Modules.Topology.ViewModels;
    using ComStudio.Modules.Topology.Views;
    using Microsoft.Practices.Unity;
    using Prism.Modularity;
    using Prism.Regions;

    public class TopologyModule : IModule
    {
        private readonly IUnityContainer container;
        private readonly IRegionManager regionManager;

        public TopologyModule(IUnityContainer container, IRegionManager regionManager)
        {
            this.container = container;
            this.regionManager = regionManager;
        }

        public void Initialize()
        {
            this.container.RegisterType<ITopologyNodeListService, TopologyNodeListService>();
            // this.container.RegisterType<AddWatchViewModel, AddWatchViewModel>();
            this.container.RegisterType<TopologyNodeListViewModel, TopologyNodeListViewModel>();
            //this.regionManager.RegisterViewWithRegion(RegionNames.MainToolBarRegion,
            //                                           () => this.container.Resolve<AddWatchView>());
            this.regionManager.RegisterViewWithRegion(RegionNames.MainRegion,
                                                       () => this.container.Resolve<TopologyNodeListView>());
        }
    }
}
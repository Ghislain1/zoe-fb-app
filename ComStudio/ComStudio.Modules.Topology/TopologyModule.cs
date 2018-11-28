namespace ComStudio.Modules.Topology
{
    using ComStudio.Infrastructure;
    using ComStudio.Infrastructure.Interfaces;

    using ComStudio.Modules.Topology.Services;
    using ComStudio.Modules.Topology.ViewModels;
    using ComStudio.Modules.Topology.Views;
    using Prism.Ioc;
    using Prism.Modularity;
    using Prism.Regions;
    using System.Threading.Tasks;

    public class TopologyModule : IModule
    {
        private readonly IRegionManager regionManager;

        public TopologyModule(IRegionManager regionManager)
        {
            this.regionManager = regionManager;
        }

        public void Initialize(IContainerProvider containerProvider)
        {
            // await this.container.Resolve<ServerStarter>().LaunchAsnyc();

            this.regionManager.RegisterViewWithRegion(RegionNames.MainToolBarRegion,
                                                       () => containerProvider.Resolve<DiscoverTopologyView>());

            this.regionManager.RegisterViewWithRegion(RegionNames.MainRegion,
                                                       () => containerProvider.Resolve<TopologyView>());
        }

        public void OnInitialized(IContainerProvider containerProvider)
        {
            this.Initialize(containerProvider);
        }

        public void RegisterTypes(IContainerRegistry containerRegistry)
        {
            containerRegistry.RegisterSingleton<ITopologyService, TopologyService>();

            containerRegistry.RegisterSingleton<TopologyViewModel, TopologyViewModel>();
        }
    }
}
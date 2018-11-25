namespace ComStudio.Modules.Topology
{
    using ComStudio.Infrastructure;
    using ComStudio.Infrastructure.Interfaces;

    using ComStudio.Modules.Topology.Services;
    using ComStudio.Modules.Topology.ViewModels;
    using ComStudio.Modules.Topology.Views;
    using ComStudio.Web.Api;
    using Microsoft.Practices.Unity;
    using Prism.Modularity;
    using Prism.Regions;
    using System.Threading.Tasks;

    public class TopologyModule : IModule
    {
        private readonly IUnityContainer container;
        private readonly IRegionManager regionManager;

        public TopologyModule(IUnityContainer container, IRegionManager regionManager)
        {
            this.container = container;
            this.regionManager = regionManager;
        }

        public async void Initialize()
        {
            await this.container.Resolve<ServerStarter>().LaunchAsnyc();

            this.container.RegisterType<ITopologyService, TopologyService>();

            this.container.RegisterType<TopologyViewModel, TopologyViewModel>();

            this.regionManager.RegisterViewWithRegion(RegionNames.MainToolBarRegion,
                                                       () => this.container.Resolve<DiscoverTopologyView>());

            this.regionManager.RegisterViewWithRegion(RegionNames.MainRegion,
                                                       () => this.container.Resolve<TopologyView>());
        }

        private async Task Call()
        {
            await this.container.Resolve<ServerStarter>().LaunchAsnyc();
        }
    }
}
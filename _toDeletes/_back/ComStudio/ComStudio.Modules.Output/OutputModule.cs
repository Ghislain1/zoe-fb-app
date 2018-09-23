namespace ComStudio.Modules.Output
{
    using Microsoft.Practices.Unity;
    using Prism.Modularity;
    using Prism.Regions;

    public class OutputModule : IModule
    {
        private readonly IUnityContainer container;
        private readonly IRegionManager regionManager;

        public OutputModule(IUnityContainer container, IRegionManager regionManager)
        {
            this.container = container;
            this.regionManager = regionManager;
        }

        public void Initialize()
        {
        }
    }
}
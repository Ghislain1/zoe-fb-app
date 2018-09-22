namespace ComStudio.Modules.Output
{
    using Microsoft.Practices.Unity;
    using Prism.Modularity;
    using Prism.Regions;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

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
namespace ComStudio.Modules.Startpage
{
    using Microsoft.Practices.Unity;
    using Prism.Modularity;
    using Prism.Regions;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class StartpageModule : IModule
    {
        private readonly IUnityContainer container;
        private readonly IRegionManager regionManager;

        public StartpageModule(IUnityContainer container, IRegionManager regionManager)
        {
            this.container = container;
            this.regionManager = regionManager;
        }

        public void Initialize()
        {
        }
    }
}
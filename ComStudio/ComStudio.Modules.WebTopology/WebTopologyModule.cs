using Prism.Ioc;
using Prism.Modularity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ComStudio.Modules.WebTopology
{
    public class WebTopologyModule : IModule
    {
        public WebTopologyModule()
        {
        }

        public void Initialize(IContainerProvider containerProvider)
        {
        }

        public void OnInitialized(IContainerProvider containerProvider)
        {
            //TODO refatory programm class !!
            Program.Main(null);
        }

        public void RegisterTypes(IContainerRegistry containerRegistry)
        {
            //containerRegistry.RegisterSingleton<ITopologyService, TopologyService>();

            //containerRegistry.RegisterSingleton<TopologyViewModel, TopologyViewModel>();
        }
    }
}
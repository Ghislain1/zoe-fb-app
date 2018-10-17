namespace ComStudio.Modules.Topology.Services
{
    using ComStudio.Infrastructure.Interfaces;
    using ComStudio.Modules.Topology.Interfaces;
    using ComStudio.Modules.Topology.Models;
    using System;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Windows.Input;

    public class TopologyNodeListService : ITopologyNodeListService
    {
        private readonly ITopologyService topologyService;

        public TopologyNodeListService(ITopologyService topologyService)
        {
            this.topologyService = topologyService;
        }

        public ICommand AddTopologyNodeCommand { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public string GetName(string systemTag)
        {
            throw new NotImplementedException();
        }

        public ObservableCollection<TopologyNodeItemViewModel> GetTopologyNodeList()
        {
            var dd = this.topologyService.GetTopologyItemList().Select(ti => new TopologyNodeItemViewModel(ti)).ToList();
            this.topologyService.GetTopologySystemTagList();
            return new ObservableCollection<TopologyNodeItemViewModel>(dd);
        }

        public ObservableCollection<string> RetrieveTopologyNodeList()
        {
            throw new NotImplementedException();
        }
    }
}
namespace ComStudio.Modules.Topology.Services
{
    using ComStudio.Infrastructure.Interfaces;
    using ComStudio.Infrastructure.Models;

    using ComStudio.Modules.Topology.Models;
    using System;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Windows.Input;

    public class TopologyService : ITopologyService
    {
        public string GetLocation(string systemTag)
        {
            throw new NotImplementedException();
        }

        public string GetName(string systemTag)
        {
            return "Name " + systemTag;
        }

        public IEnumerable<TopologyNodeItem> GetTopologyItemList()
        {
            throw new NotImplementedException();
        }

        public IList<string> GetTopologySystemTagList()
        {
            var listFake = new List<string>();
            for (int i = 0; i < 10; i++)
            {
                listFake.Add("List Nr " + i);
            }
            return listFake;
        }

        public bool SystemTagExists(string systemTag)
        {
            throw new NotImplementedException();
        }
    }
}
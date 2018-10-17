using ComStudio.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComStudio.Infrastructure.Interfaces
{
    public interface ITopologyService
    {
        string GetLocation(string systemTag);

        string GetName(string systemTag);

        IEnumerable<TopologyNodeItem> GetTopologyItemList();

        IList<string> GetTopologySystemTagList();

        // event EventHandler<AccountPositionModelEventArgs> Updated; IList<TopologyNodeItem> RetrieveTopologyNodeList();

        bool SystemTagExists(string systemTag);
    }
}
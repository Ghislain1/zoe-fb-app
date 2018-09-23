using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace ComStudio.Modules.Topology.Interfaces
{
    public interface ITopologyNodeListService
    {
        ICommand AddTopologyNodeCommand { get; set; }

        ObservableCollection<string> RetrieveTopologyNodeList();
    }
}
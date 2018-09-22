namespace ComStudio.Modules.Watch.Services
{
    using System;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Windows.Input;

    public interface IWatchListService
    {
        ICommand AddWatchCommand { get; set; }

        ObservableCollection<string> RetrieveWatchList();
    }
}
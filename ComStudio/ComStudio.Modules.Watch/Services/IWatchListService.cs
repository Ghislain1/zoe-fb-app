namespace ComStudio.Modules.Watch.Services
{
    using System.Collections.ObjectModel;
    using System.Windows.Input;

    public interface IWatchListService
    {
        ICommand AddWatchCommand { get; set; }

        ObservableCollection<string> RetrieveWatchList();
    }
}
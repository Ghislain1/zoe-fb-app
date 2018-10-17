namespace ComStudio.Modules.Watch.ViewModels
{
    using ComStudio.Modules.Watch.Services;
    using Prism.Mvvm;
    using System;
    using System.Windows.Input;

    public class AddWatchViewModel : BindableBase
    {
        private string stockSymbol;
        private IWatchListService watchListService;

        public AddWatchViewModel(IWatchListService watchListService)
        {
            if (watchListService == null)
            {
                throw new ArgumentNullException("watchListService");
            }

            this.watchListService = watchListService;
        }

        public ICommand AddWatchCommand { get { return this.watchListService.AddWatchCommand; } }

        public string StockSymbol
        {
            get { return stockSymbol; }
            set
            {
                SetProperty(ref stockSymbol, value);
            }
        }
    }
}
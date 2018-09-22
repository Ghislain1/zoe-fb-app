namespace ComStudio.Modules.Watch.Services
{
    using ComStudio.Infrastructure.Interfaces;
    using Prism.Commands;
    using System;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.Globalization;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Windows.Input;

    public class WatchListService : IWatchListService
    {
        private readonly IMarketFeedService marketFeedService;

        public WatchListService(IMarketFeedService marketFeedService)
        {
            //TODO: Wer implemtiert IMarketFeedService?: wer bringt data mit!!
            this.marketFeedService = marketFeedService;
            WatchItems = new ObservableCollection<string>();

            AddWatchCommand = new DelegateCommand<string>(AddWatch);
        }

        public ICommand AddWatchCommand { get; set; }
        private ObservableCollection<string> WatchItems { get; set; }

        public ObservableCollection<string> RetrieveWatchList()
        {
            return WatchItems;
        }

        private void AddWatch(string tickerSymbol)
        {
            if (!String.IsNullOrEmpty(tickerSymbol))
            {
                string upperCasedTrimmedSymbol = tickerSymbol.ToUpper(CultureInfo.InvariantCulture).Trim();
                if (!WatchItems.Contains(upperCasedTrimmedSymbol))
                {
                    if (marketFeedService.SymbolExists(upperCasedTrimmedSymbol))
                    {
                        WatchItems.Add(upperCasedTrimmedSymbol);
                    }
                }
            }
        }
    }
}
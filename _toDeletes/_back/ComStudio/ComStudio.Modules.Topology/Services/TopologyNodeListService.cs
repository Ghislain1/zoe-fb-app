namespace ComStudio.Modules.Topology.Services
{
    using ComStudio.Infrastructure.Interfaces;
    using ComStudio.Modules.Topology.Interfaces;
    using Prism.Commands;
    using System;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.Globalization;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Windows.Input;

    public class TopologyNodeListService : ITopologyNodeListService
    {
        private readonly IMarketFeedService marketFeedService;

        public TopologyNodeListService(IMarketFeedService marketFeedService)
        {
            //TODO: Wer implemtiert IMarketFeedService?: wer bringt data mit!!
            this.marketFeedService = marketFeedService;
            WatchItems = new ObservableCollection<string>();

            AddTopologyNodeCommand = new DelegateCommand<string>(AddWatch);
        }

        public ICommand AddTopologyNodeCommand { get; set; }
        private ObservableCollection<string> WatchItems { get; set; }

        public ObservableCollection<string> RetrieveTopologyNodeList()
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
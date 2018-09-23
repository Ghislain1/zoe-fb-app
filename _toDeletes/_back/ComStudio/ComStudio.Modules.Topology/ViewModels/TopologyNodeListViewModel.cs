namespace ComStudio.Modules.Topology.ViewModels
{
    using ComStudio.Infrastructure;
    using ComStudio.Infrastructure.Interfaces;
    using ComStudio.Infrastructure.Messaging;
    using ComStudio.Modules.Topology.Interfaces;
    using ComStudio.Modules.Topology.Models;
    using Prism.Commands;
    using Prism.Events;
    using Prism.Mvvm;
    using Prism.Regions;
    using System;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.Collections.Specialized;
    using System.Linq;
    using System.Windows.Input;

    public class TopologyNodeListViewModel : BindableBase
    {
        private readonly IEventAggregator eventAggregator;
        private readonly IMarketFeedService marketFeedService;
        private readonly IRegionManager regionManager;
        private readonly ObservableCollection<string> topologyNodeList;
        private IAccountPositionService accountPositionService;
        private TopologyNodeItem currentTopologyNodeItem;
        private ICommand removeTopologyNodeCommand;
        private ObservableCollection<TopologyNodeItem> topologyNodeListItems;

        public TopologyNodeListViewModel(IAccountPositionService accountPositionService, ITopologyNodeListService TopologyNodeListService, IMarketFeedService marketFeedService, IRegionManager regionManager, IEventAggregator eventAggregator)
        {
            //TODO: Ghslain Wer implemtiert this service? Response= Andere Module-->
            if (TopologyNodeListService == null)
            {
                throw new ArgumentNullException("TopologyNodeListService");
            }

            this.accountPositionService = accountPositionService;

            //TODO: Wer Implentier this? resp: andere Module -->IMarketFeedService ist in
            if (marketFeedService == null)
            {
                throw new ArgumentNullException("TopologyNodeListService");
            }

            if (eventAggregator == null)
            {
                throw new ArgumentNullException("eventAggregator");
            }
            this.marketFeedService = marketFeedService;

            this.TopologyNodeListItems = new ObservableCollection<TopologyNodeItem>();
            this.HeaderInfo = "TopologyNodeList(VM)";
            var collection = accountPositionService.GetAccountPositions().Select(i => i.TickerSymbol);
            this.PopulateTopologyNodeItemsList(collection);

            this.marketFeedService = marketFeedService;
            this.regionManager = regionManager;

            this.topologyNodeList = TopologyNodeListService.RetrieveTopologyNodeList();
            this.topologyNodeList.CollectionChanged += delegate { this.PopulateTopologyNodeItemsList(this.topologyNodeList); };

            this.eventAggregator = eventAggregator;
            this.eventAggregator.GetEvent<MarketPricesUpdatedEvent>().Subscribe(this.MarketPricesUpdated, ThreadOption.UIThread);

            this.removeTopologyNodeCommand = new DelegateCommand<string>(this.RemoveTopologyNode);

            this.TopologyNodeListItems.CollectionChanged += this.TopologyNodeListItems_CollectionChanged;
        }

        public TopologyNodeItem CurrentTopologyNodeItem
        {
            get
            {
                return this.currentTopologyNodeItem;
            }

            set
            {
                if (value != null)
                {
                    SetProperty(ref this.currentTopologyNodeItem, value);
                    this.eventAggregator.GetEvent<TickerSymbolSelectedEvent>().Publish(this.currentTopologyNodeItem.TickerSymbol);
                }
            }
        }

        public string HeaderInfo { get; set; }

        public ICommand RemoveTopologyNodeCommand { get => this.removeTopologyNodeCommand; }

        public ObservableCollection<TopologyNodeItem> TopologyNodeListItems
        {
            get
            {
                return this.topologyNodeListItems;
            }

            private set
            {
                SetProperty(ref this.topologyNodeListItems, value);
            }
        }

        private void MarketPricesUpdated(IDictionary<string, decimal> updatedPrices)
        {
            if (updatedPrices == null)
            {
                throw new ArgumentNullException("updatedPrices");
            }

            foreach (TopologyNodeItem TopologyNodeItem in this.TopologyNodeListItems)
            {
                if (updatedPrices.ContainsKey(TopologyNodeItem.TickerSymbol))
                {
                    TopologyNodeItem.CurrentPrice = updatedPrices[TopologyNodeItem.TickerSymbol];
                }
            }
        }

        private void PopulateTopologyNodeItemsList(IEnumerable<string> TopologyNodeItemsList)
        {
            this.TopologyNodeListItems.Clear();
            foreach (string tickerSymbol in TopologyNodeItemsList)
            {
                decimal? currentPrice;
                try
                {
                    currentPrice = this.marketFeedService.GetPrice(tickerSymbol);
                }
                catch (ArgumentException)
                {
                    currentPrice = null;
                }

                this.TopologyNodeListItems.Add(new TopologyNodeItem(tickerSymbol, currentPrice));
            }
        }

        private void RemoveTopologyNode(string tickerSymbol)
        {
            this.topologyNodeList.Remove(tickerSymbol);
        }

        private void TopologyNodeListItems_CollectionChanged(object sender, NotifyCollectionChangedEventArgs e)
        {
            if (e.Action == NotifyCollectionChangedAction.Add)
            {
                regionManager.Regions[RegionNames.MainRegion].RequestNavigate("/TopologyNodeListView", nr => { });
            }
        }
    }
}
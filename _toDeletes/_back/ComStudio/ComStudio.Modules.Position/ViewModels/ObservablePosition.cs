namespace ComStudio.Modules.Position.ViewModels
{
    using ComStudio.Infrastructure.Interfaces;
    using ComStudio.Infrastructure.Messaging;
    using ComStudio.Infrastructure.Models;
    using ComStudio.Modules.Position.Interfaces;
    using Prism.Events;
    using System;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.Linq;

    public class ObservablePosition : IObservablePosition
    {
        private IAccountPositionService accountPositionService;
        private IMarketFeedService marketFeedService;

        public ObservablePosition(IAccountPositionService accountPositionService, IMarketFeedService marketFeedService, IEventAggregator eventAggregator)
        {
            if (eventAggregator == null)
            {
                throw new ArgumentNullException("eventAggregator");
            }

            this.Items = new ObservableCollection<PositionSummaryItem>();

            this.accountPositionService = accountPositionService;
            this.marketFeedService = marketFeedService;

            eventAggregator.GetEvent<MarketPricesUpdatedEvent>().Subscribe(MarketPricesUpdated, ThreadOption.UIThread);

            PopulateItems();

            this.accountPositionService.Updated += PositionSummaryItems_Updated;
        }

        public ObservableCollection<PositionSummaryItem> Items { get; private set; }

        public void MarketPricesUpdated(IDictionary<string, decimal> tickerSymbolsPrice)
        {
            if (tickerSymbolsPrice == null)
            {
                throw new ArgumentNullException("tickerSymbolsPrice");
            }

            foreach (PositionSummaryItem position in this.Items)
            {
                if (tickerSymbolsPrice.ContainsKey(position.TickerSymbol))
                {
                    position.CurrentPrice = tickerSymbolsPrice[position.TickerSymbol];
                }
            }
        }

        private void PopulateItems()
        {
            PositionSummaryItem positionSummaryItem;
            foreach (AccountPosition accountPosition in this.accountPositionService.GetAccountPositions())
            {
                positionSummaryItem = new PositionSummaryItem(accountPosition.TickerSymbol, accountPosition.CostBasis, accountPosition.Shares, this.marketFeedService.GetPrice(accountPosition.TickerSymbol));
                this.Items.Add(positionSummaryItem);
            }
        }

        private void PositionSummaryItems_Updated(object sender, AccountPositionModelEventArgs e)
        {
            if (e.AcctPosition != null)
            {
                PositionSummaryItem positionSummaryItem = this.Items.First(p => p.TickerSymbol == e.AcctPosition.TickerSymbol);

                if (positionSummaryItem != null)
                {
                    positionSummaryItem.Shares = e.AcctPosition.Shares;
                    positionSummaryItem.CostBasis = e.AcctPosition.CostBasis;
                }
            }
        }
    }
}
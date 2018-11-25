using ComStudio.Infrastructure.Interfaces;
using ComStudio.Infrastructure.Messaging;
using ComStudio.Infrastructure.Models;
using Prism.Events;
using Prism.Mvvm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComStudio.Modules.Market.ViewModels
{
    public class TrendLineViewModel : BindableBase

    {
        private readonly IMarketHistoryService marketHistoryService;

        private MarketHistoryCollection historyCollection;
        private string tickerSymbol;

        public TrendLineViewModel(IMarketHistoryService marketHistoryService, IEventAggregator eventAggregator)

        {
            if (eventAggregator == null)

            {
                throw new ArgumentNullException("eventAggregator");
            }

            this.marketHistoryService = marketHistoryService;

            eventAggregator.GetEvent<TickerSymbolSelectedEvent>().Subscribe(this.TickerSymbolChanged);
        }

        public MarketHistoryCollection HistoryCollection { get => this.historyCollection; private set => this.SetProperty(ref this.historyCollection, value); }

        public string TickerSymbol { get => this.tickerSymbol; set => SetProperty(ref this.tickerSymbol, value); }

        public void TickerSymbolChanged(string newTickerSymbol)
        {
            MarketHistoryCollection newHistoryCollection = this.marketHistoryService.GetPriceHistory(newTickerSymbol);

            this.TickerSymbol = newTickerSymbol;

            this.HistoryCollection = newHistoryCollection;
        }
    }
}
namespace ComStudio.Modules.Watch
{
    using Prism.Mvvm;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class WatchItem : BindableBase
    {
        private decimal? _currentPrice;

        public WatchItem(string tickerSymbol, decimal? currentPrice)
        {
            TickerSymbol = tickerSymbol;
            CurrentPrice = currentPrice;
        }

        public decimal? CurrentPrice
        {
            get { return _currentPrice; }
            set
            {
                SetProperty(ref _currentPrice, value);
            }
        }

        public string TickerSymbol { get; set; }
    }
}
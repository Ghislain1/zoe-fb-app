namespace ComStudio.Modules.Topology.Models
{
    using Prism.Mvvm;

    public class TopologyNodeItem : BindableBase
    {
        private decimal? _currentPrice;

        public TopologyNodeItem(string tickerSymbol, decimal? currentPrice)
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
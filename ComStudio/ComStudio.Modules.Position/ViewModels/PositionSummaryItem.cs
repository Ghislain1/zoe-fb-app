using Prism.Mvvm;

namespace ComStudio.Modules.Position.ViewModels
{
    public class PositionSummaryItem : BindableBase
    {
        private decimal _costBasis;

        private decimal _currentPrice;

        private long _shares;

        private string _tickerSymbol;

        public PositionSummaryItem(string tickerSymbol, decimal costBasis, long shares, decimal currentPrice)
        {
            TickerSymbol = tickerSymbol;
            CostBasis = costBasis;
            Shares = shares;
            CurrentPrice = currentPrice;
        }

        public decimal CostBasis
        {
            get
            {
                return _costBasis;
            }
            set
            {
                if (SetProperty(ref _costBasis, value))
                {
                    this.OnPropertyChanged(() => this.GainLossPercent);
                }
            }
        }

        public decimal CurrentPrice
        {
            get => _currentPrice;

            set
            {
                if (SetProperty(ref _currentPrice, value))
                {
                    this.OnPropertyChanged(() => this.MarketValue);
                    this.OnPropertyChanged(() => this.GainLossPercent);
                }
            }
        }

        public decimal GainLossPercent { get => ((CurrentPrice * Shares - CostBasis) * 100 / CostBasis); }

        public decimal MarketValue
        {
            get
            {
                return (_shares * _currentPrice);
            }
        }

        public long Shares
        {
            get
            {
                return _shares;
            }
            set
            {
                if (SetProperty(ref _shares, value))
                {
                    this.OnPropertyChanged(() => this.MarketValue);
                    this.OnPropertyChanged(() => this.GainLossPercent);
                }
            }
        }

        public string TickerSymbol
        {
            get
            {
                return _tickerSymbol;
            }
            set
            {
                if (value == null)
                {
                    value = string.Empty;
                }

                SetProperty(ref _tickerSymbol, value);
            }
        }
    }
}
namespace ComStudio.Modules.Position.Models
{
    using ComStudio.Infrastructure;
    using Prism.Mvvm;

    public class TransactionInfo : BindableBase
    {
        private string tickerSymbol;
        private TransactionType transactionType;

        public TransactionInfo()
        {
        }

        public TransactionInfo(string tickerSymbol, TransactionType transactionType)
        {
            this.tickerSymbol = tickerSymbol;
            this.transactionType = transactionType;
        }

        public string TickerSymbol { get => this.tickerSymbol; set => SetProperty(ref this.tickerSymbol, value); }

        public TransactionType TransactionType { get => this.transactionType; set => SetProperty(ref this.transactionType, value); }
    }
}
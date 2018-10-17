using ComStudio.Infrastructure;

namespace ComStudio.Modules.Position.Models
{
    public class Order
    {
        public OrderType OrderType { get; set; }
        public int Shares { get; set; }
        public decimal StopLimitPrice { get; set; }
        public string TickerSymbol { get; set; }
        public TimeInForce TimeInForce { get; set; }
        public TransactionType TransactionType { get; set; }
    }
}
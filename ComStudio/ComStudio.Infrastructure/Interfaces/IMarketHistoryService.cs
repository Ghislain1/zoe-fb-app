namespace ComStudio.Infrastructure.Interfaces
{
    using ComStudio.Infrastructure.Models;

    public interface IMarketHistoryService
    {
        MarketHistoryCollection GetPriceHistory(string tickerSymbol);
    }
}
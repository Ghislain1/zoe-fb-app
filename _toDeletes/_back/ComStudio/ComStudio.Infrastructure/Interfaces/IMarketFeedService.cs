namespace ComStudio.Infrastructure.Interfaces
{
    using ComStudio.Infrastructure.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public interface IMarketFeedService
    {
        decimal GetPrice(string tickerSymbol);

        long GetVolume(string tickerSymbol);

        bool SymbolExists(string tickerSymbol);
    }
}
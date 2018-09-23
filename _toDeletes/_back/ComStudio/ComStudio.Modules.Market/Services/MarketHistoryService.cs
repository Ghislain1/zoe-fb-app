namespace ComStudio.Modules.Market.Services
{
    using ComStudio.Infrastructure.Interfaces;
    using ComStudio.Infrastructure.Models;
    using ComStudio.Modules.Market.Properties;
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Linq;
    using System.Xml.Linq;

    public class MarketHistoryService : IMarketHistoryService
    {
        private Dictionary<string, MarketHistoryCollection> _marketHistory;

        public MarketHistoryService()
        {
            InitializeMarketHistory();
        }

        public MarketHistoryCollection GetPriceHistory(string tickerSymbol)
        {
            MarketHistoryCollection items = _marketHistory[tickerSymbol];
            return items;
        }

        private void InitializeMarketHistory()
        {
            XDocument document = XDocument.Parse(Resources.MarketHistory);

            _marketHistory = document.Descendants("MarketHistoryItem")
                .GroupBy(x => x.Attribute("TickerSymbol").Value,
                         x => new MarketHistoryItem
                         {
                             DateTimeMarker = DateTime.Parse(x.Attribute("Date").Value, CultureInfo.InvariantCulture),
                             Value = Decimal.Parse(x.Value, NumberStyles.Float, CultureInfo.InvariantCulture)
                         })
                .ToDictionary(group => group.Key, group => new MarketHistoryCollection(group));
        }
    }
}
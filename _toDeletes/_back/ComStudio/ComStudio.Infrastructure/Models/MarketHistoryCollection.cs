namespace ComStudio.Infrastructure.Models
{
    using System;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;

    public class MarketHistoryCollection : ObservableCollection<MarketHistoryItem>
    {
        public MarketHistoryCollection()
        {
        }

        public MarketHistoryCollection(IEnumerable<MarketHistoryItem> list)
        {
            if (list == null)
            {
                throw new ArgumentNullException("list");
            }

            foreach (MarketHistoryItem marketHistoryItem in list)
            {
                this.Add(marketHistoryItem);
            }
        }
    }
}
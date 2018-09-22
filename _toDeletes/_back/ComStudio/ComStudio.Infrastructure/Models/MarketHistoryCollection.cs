namespace ComStudio.Infrastructure.Models
{
    using System;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

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
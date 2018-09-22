using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComStudio.Infrastructure.Models
{
    public class NewsFeedEventArgs : EventArgs
    {
        public NewsFeedEventArgs(string tickerSymbol, string newsHeadline)
        {
            TickerSymbol = tickerSymbol;
            NewsHeadline = newsHeadline;
        }

        public string NewsHeadline { get; set; }
        public string TickerSymbol { get; set; }
    }
}
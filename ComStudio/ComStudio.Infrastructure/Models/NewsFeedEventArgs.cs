using System;

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
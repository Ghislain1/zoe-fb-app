namespace ComStudio.Infrastructure.Interfaces
{
    using ComStudio.Infrastructure.Models;
    using System;
    using System.Collections.Generic;

    public interface INewsFeedService
    {
        event EventHandler<NewsFeedEventArgs> Updated;

        IList<NewsArticle> GetNews(string tickerSymbol);

        bool HasNews(string tickerSymbol);
    }
}
using System;

namespace ComStudio.Infrastructure.Models
{
    public class AccountPositionModelEventArgs : EventArgs
    {
        public AccountPositionModelEventArgs(AccountPosition position)
        {
            AcctPosition = position;
        }

        public AccountPosition AcctPosition { get; set; }
    }

    public class NewsArticle
    {
        public string Body { get; set; }
        public string IconUri { get; set; }
        public DateTime PublishedDate { get; set; }
        public string Title { get; set; }
    }
}
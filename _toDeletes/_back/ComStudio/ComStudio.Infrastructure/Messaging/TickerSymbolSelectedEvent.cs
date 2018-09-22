namespace ComStudio.Infrastructure.Messaging
{
    using Prism.Events;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class TickerSymbolSelectedEvent : PubSubEvent<string>
    {
    }
}
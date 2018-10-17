namespace ComStudio.Infrastructure.Messaging
{
    using Prism.Events;
    using System.Collections.Generic;

    public class MarketPricesUpdatedEvent : PubSubEvent<IDictionary<string, decimal>>
    {
    }

    public class SystemTagSelectedEvent : PubSubEvent<string>
    {
    }
}
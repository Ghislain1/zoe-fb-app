namespace ComStudio.Modules.Market.Services
{
    using ComStudio.Infrastructure.Interfaces;
    using ComStudio.Infrastructure.Messaging;
    using ComStudio.Infrastructure.Models;
    using ComStudio.Modules.Market.Properties;
    using Prism.Events;
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Linq;
    using System.Xml.Linq;

    public class TopologyService : ITopologyService, IDisposable
    {
        private static readonly Random randomGenerator = new Random(unchecked((int)DateTime.Now.Ticks));
        private readonly object lockObject = new object();
        private readonly Dictionary<string, TopologyNodeItem> topologyDict = new Dictionary<string, TopologyNodeItem>();
        private readonly Dictionary<string, string> topologyNodeNameList = new Dictionary<string, string>();
        // private readonly Dictionary<string, string> topologyNodeKeyList = new Dictionary<string, string>();

        private readonly Dictionary<string, long> volumeList = new Dictionary<string, long>();

        // private Timer _timer;
        private int refreshInterval = 10000;

        public TopologyService(IEventAggregator eventAggregator)
        : this(XDocument.Parse(Resources.TopologyInfo), eventAggregator)
        {
        }

        protected TopologyService(XDocument document, IEventAggregator eventAggregator)
        {
            if (document == null)
            {
                throw new ArgumentNullException("document");
            }

            EventAggregator = eventAggregator;
            // this.timer = new Timer(TimerTick);

            var marketItemsElement = document.Element("TopologyItems");
            var refreshRateAttribute = marketItemsElement.Attribute("RefreshRate");
            if (refreshRateAttribute != null)
            {
                RefreshInterval = CalculateRefreshIntervalMillisecondsFromSeconds(int.Parse(refreshRateAttribute.Value, CultureInfo.InvariantCulture));
            }

            var itemElements = marketItemsElement.Elements("TopologyItem");
            foreach (XElement item in itemElements)
            {
                string systemTag = item.Attribute("SystemTag").Value;
                string lastName = item.Attribute("Name").Value;
                long volume = Convert.ToInt64(item.Attribute("Volume").Value, CultureInfo.InvariantCulture);
                topologyNodeNameList.Add(systemTag, lastName);

                var topo = new TopologyNodeItem();
                topo.SystemTag = systemTag;
                topo.Name = lastName;
                this.topologyDict.Add(systemTag, topo);

                //TODO:Ghisl 2 Rage Tag fake data
                var children = new List<TopologyNodeItem>();
                for (int i = 1; i < 5; i++)
                {
                    var topoChild = new TopologyNodeItem();
                    topo.SystemTag = Guid.NewGuid().ToString();
                    topoChild.Name = "Device Nr." + i;
                    children.Add(topoChild);
                }

                topo.ChildItems = children;

                this.volumeList.Add(systemTag, volume);
            }
        }

        // Use C# destructor syntax for finalization code.
        ~TopologyService()
        {
            Dispose(false);
        }

        public int RefreshInterval
        {
            get { return this.refreshInterval; }
            set
            {
                this.refreshInterval = value;
                // this.timer.Change( this.refreshInterval, this.refreshInterval);
            }
        }

        private IEventAggregator EventAggregator { get; set; }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public string GetLocation(string systemTag)
        {
            throw new NotImplementedException();
        }

        public string GetName(string systemTag)
        {
            return this.topologyNodeNameList[systemTag];
        }

        public IEnumerable<TopologyNodeItem> GetTopologyItemList()
        {
            return this.topologyDict.Values;
        }

        public string GetTopologyNodeName(string systemTag)
        {
            if (!SystemTagExists(systemTag))
                throw new ArgumentException(Resources.MarketFeedTickerSymbolNotFoundException, "systemTag");

            return topologyNodeNameList[systemTag];
        }

        public IList<string> GetTopologySystemTagList()
        {
            var ds = new List<string>();
            foreach (var systemTag in this.topologyNodeNameList.Keys)
            {
                ds.Add(systemTag);
            }
            return ds;
        }

        public long GetVolume(string systemTag)
        {
            return this.volumeList[systemTag];
        }

        public bool SystemTagExists(string systemTag)
        {
            throw new NotImplementedException();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposing) return;
            //TODO: GHislain
            //if ( this.timer != null)
            //     this.timer.Dispose();
            // this.timer = null;
        }

        protected void UpdateTopologyName(string systemTag, string newName, long newVolume)
        {
            lock (this.lockObject)
            {
                topologyNodeNameList[systemTag] = newName;
                this.volumeList[systemTag] = newVolume;
            }
            OnTopologyNodeNamesUpdated();
        }

        protected void UpdateTopologyNodeNames()
        {
            lock (this.lockObject)
            {
                foreach (string symbol in topologyNodeNameList.Keys.ToArray())
                {
                    string newValue = topologyNodeNameList[symbol];
                    // newValue += Convert.ToDecimal(randomGenerator.NextDouble() * 10f) - 5m;
                    topologyNodeNameList[symbol] = newValue;
                }
            }
            OnTopologyNodeNamesUpdated();
        }

        private static int CalculateRefreshIntervalMillisecondsFromSeconds(int seconds)
        {
            return seconds * 1000;
        }

        private void OnTopologyNodeNamesUpdated()
        {
            Dictionary<string, string> clonedTopologyNameList = null;
            lock (this.lockObject)
            {
                clonedTopologyNameList = new Dictionary<string, string>(topologyNodeNameList);
            }
            EventAggregator.GetEvent<TopologyNodeNameUpdatedEvent>().Publish("clonedTopologyNameList");
        }

        /// <summary>
        /// Callback for Timer
        /// </summary>
        /// <param name="state"></param>
        private void TimerTick(object state)
        {
            UpdateTopologyNodeNames();
        }
    }
}
namespace ComStudio.Modules.Topology.ViewModels
{
    using ComStudio.Infrastructure;
    using ComStudio.Infrastructure.Interfaces;
    using ComStudio.Infrastructure.Messaging;
    using ComStudio.Modules.Topology.Interfaces;
    using ComStudio.Modules.Topology.Models;
    using Prism.Commands;
    using Prism.Events;
    using Prism.Mvvm;
    using Prism.Regions;
    using System;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.Collections.Specialized;
    using System.Linq;
    using System.Windows.Input;

    public class TopologyNodeListViewModel : BindableBase
    {
        private readonly IEventAggregator eventAggregator;

        private readonly IRegionManager regionManager;
        private readonly ITopologyNodeListService topologyNodeListService;
        private readonly ITopologyService topologyService;
        private TopologyNodeItemViewModel currentTopologyNodeItem;
        private ICommand removeTopologyNodeCommand;
        private ObservableCollection<TopologyNodeItemViewModel> topologyNodeListItems;

        public TopologyNodeListViewModel(ITopologyService topologyService, ITopologyNodeListService topologyNodeListService, IRegionManager regionManager, IEventAggregator eventAggregator)
        {
            //TODO: Ghslain Wer implemtiert this service? Response= Andere Module-->
            if (topologyService == null)
            {
                throw new ArgumentNullException("TopologyNodeListService");
            }

            if (eventAggregator == null)
            {
                throw new ArgumentNullException("eventAggregator");
            }

            this.regionManager = regionManager;
            this.eventAggregator = eventAggregator;
            this.topologyService = topologyService;// from insfrac
            this.topologyNodeListService = topologyNodeListService;// from hier
            this.TopologyNodeListItems = new ObservableCollection<TopologyNodeItemViewModel>();
            this.HeaderInfo = "TopologyNodeList(VM)";

            //TODO: GHislain ---> Hier sind  die systemtag von Master only!!
            var collection = this.topologyService.GetTopologySystemTagList();
            this.PopulateTopologyNodeItemsList(collection);

            var collectionVM = this.topologyNodeListService.GetTopologyNodeList();

            this.topologyNodeListItems.CollectionChanged += delegate { this.PopulateTopologyNodeItemsList(collection); };

            // this.eventAggregator.GetEvent<SystemTagSelectedEvent>().Subscribe(this.TopologyNodeNamesUpdated, ThreadOption.UIThread);

            this.removeTopologyNodeCommand = new DelegateCommand<TopologyNodeItemViewModel>(this.RemoveTopologyNode);

            this.TopologyNodeListItems.CollectionChanged += this.TopologyNodeListItems_CollectionChanged;

            this.DiscoverCommand = new DelegateCommand(() =>
            {
                var dsdsd0 = this.HeaderInfo;
            }, () => this.CurrentTopologyNodeItem != null);
        }

        public TopologyNodeItemViewModel CurrentTopologyNodeItem
        {
            get
            {
                return this.currentTopologyNodeItem;
            }

            set
            {
                if (value != null)
                {
                    SetProperty(ref this.currentTopologyNodeItem, value);
                    this.eventAggregator.GetEvent<SystemTagSelectedEvent>().Publish(this.currentTopologyNodeItem.SystemTag);

                    var topo = this.topologyService.GetTopologyItemList();
                }
            }
        }

        public DelegateCommand DiscoverCommand { get; private set; }

        public string HeaderInfo { get; set; }

        public ICommand RemoveTopologyNodeCommand { get => this.removeTopologyNodeCommand; }

        public ObservableCollection<TopologyNodeItemViewModel> TopologyNodeListItems
        {
            get
            {
                return this.topologyNodeListItems;
            }

            private set
            {
                SetProperty(ref this.topologyNodeListItems, value);
            }
        }

        private void PopulateTopologyNodeItemsList(IEnumerable<string> TopologyNodeItemsList)
        {
            this.TopologyNodeListItems.Clear();
            foreach (string systemTag in TopologyNodeItemsList)
            {
                string currentName;
                try
                {
                    currentName = this.topologyService.GetName(systemTag);
                }
                catch (ArgumentException)
                {
                    currentName = null;
                }

                this.TopologyNodeListItems.Add(new TopologyNodeItemViewModel(systemTag, currentName));
            }
        }

        private void RemoveTopologyNode(TopologyNodeItemViewModel current)
        {
            this.topologyNodeListItems.Remove(current);
        }

        private void TopologyNodeListItems_CollectionChanged(object sender, NotifyCollectionChangedEventArgs e)
        {
            if (e.Action == NotifyCollectionChangedAction.Add)
            {
                regionManager.Regions[RegionNames.MainRegion].RequestNavigate("/TopologyNodeListView", nr => { });
            }
        }

        private void TopologyNodeNamesUpdated(IDictionary<string, string> updatedTopologyNodeNames)
        {
            if (updatedTopologyNodeNames == null)
            {
                throw new ArgumentNullException("updatedPrices");
            }

            foreach (TopologyNodeItemViewModel topologyNodeItem in this.TopologyNodeListItems)
            {
                if (updatedTopologyNodeNames.ContainsKey(topologyNodeItem.SystemTag))
                {
                    topologyNodeItem.CurrentName = updatedTopologyNodeNames[topologyNodeItem.SystemTag];
                }
            }
        }
    }
}
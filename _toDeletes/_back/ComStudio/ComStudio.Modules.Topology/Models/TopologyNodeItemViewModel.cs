namespace ComStudio.Modules.Topology.Models
{
    using ComStudio.Infrastructure.Models;
    using Prism.Mvvm;

    public class TopologyNodeItemViewModel : BindableBase
    {
        private string currentName;
        private string name;

        private TopologyNodeItem ti;

        public TopologyNodeItemViewModel(TopologyNodeItem ti)
        {
            this.ti = ti;
            this.SystemTag = this.ti.SystemTag;
            this.Name = this.ti.Name;
        }

        public TopologyNodeItemViewModel(string systemTag, string currentName)
        {
            SystemTag = systemTag;
            CurrentName = currentName;
        }

        public string CurrentName { get => currentName; set => SetProperty(ref currentName, value); }
        public string Name { get => name; set => SetProperty(ref name, value); }
        public string SystemTag { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComStudio.Infrastructure.Models
{
    public class TopologyNodeItem
    {
        public string SystemTag { get; set; }
        public string Name { get; set; }
        public List<TopologyNodeItem> ChildItems { get; set; }
    }
}
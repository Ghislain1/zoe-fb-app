using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace VegaHome.Controllers.Resources
{
    public class MakeResource
    {
        public MakeResource()
        {
            this.Models = new Collection<ModelResource>();
        }

        public int Id { get; set; }
        public ICollection<ModelResource> Models { get; set; }

        public string Name { get; set; }
    }
}
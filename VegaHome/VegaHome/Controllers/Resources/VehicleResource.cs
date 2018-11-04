using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace VegaHome.Controllers.Resources
{
    public class VehicleResource
    {
        public VehicleResource()
        {
            Features = new Collection<KeyValuePairResource>();
        }

        public ContactResource Contact { get; set; }
        public ICollection<KeyValuePairResource> Features { get; set; }
        public int Id { get; set; }
        public bool IsRegistered { get; set; }
        public DateTime LastUpdate { get; set; }
        public KeyValuePairResource Make { get; set; }
        public KeyValuePairResource Model { get; set; }
    }
}
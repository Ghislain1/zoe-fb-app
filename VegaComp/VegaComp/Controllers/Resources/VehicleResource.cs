using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using VegaComp.Models;

namespace VegaComp.Controllers.Resources
{

    public class VehicleResource
    {
        public VehicleResource()
        {
            this.Features = new Collection<int>();
        }


        public int Id { get; set; }
        public int ModelId { get; set; }
        public Model Model { get; set; }

        public bool IsRegistered { get; set; }


        public ContactResource Contact { get; set; }


        public DateTime LastUpdate { get; set; }

        public ICollection<int> Features { get; set; }

    }
}

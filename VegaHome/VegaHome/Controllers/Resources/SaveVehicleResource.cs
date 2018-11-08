using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace VegaHome.Controllers.Resources
{
    public class SaveVehicleResource
    {
        public SaveVehicleResource()
        {
            Features = new Collection<int>();
        }

        public ContactResource Contact { get; set; }

        public ICollection<int> Features { get; set; }
        public int Id { get; set; }
        public bool IsRegistered { get; set; }
        public int ModelId { get; set; }
    }
}
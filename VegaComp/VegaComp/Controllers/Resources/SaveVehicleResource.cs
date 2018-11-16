using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace VegaComp.Controllers.Resources
{
    public class SaveVehicleResource //--> Check diffret beetween  SaveVehicleResource and VehicleResource --> SaveVehicle and Vehicle
    {
        public SaveVehicleResource()
        {
            Features = new Collection<int>(); // why just int collection???
        }

        // [Required]
        public ContactResource Contact { get; set; }

        public ICollection<int> Features { get; set; }
        public int Id { get; set; }
        public bool IsRegistered { get; set; }
        public int ModelId { get; set; }
    }
}
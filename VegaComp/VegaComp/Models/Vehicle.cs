using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VegaComp.Models
{
    [Table("Vehicles")]
    public class Vehicle
    {
        public Vehicle()
        {
            this.Features = new Collection<VehicleFeature>();
        }
        public int Id { get; set; }
        public int ModelId { get; set; }
        public Model Model { get; set; }

        public bool IsRegistered { get; set; }


        [Required]
        [StringLength(255)]
        public string ConctactName { get; set; }
        public string ConctactPhone { get; set; }
        [Required]
        [StringLength(255)]
        public string ConctactEmail { get; set; }
        public DateTime LastUpdate { get; set; }

        public ICollection<VehicleFeature> Features { get; set; }

    }
}

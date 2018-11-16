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
            this.Photos = new Collection<Photo>();
        }

        [Required]
        [StringLength(255)]
        public string ContactEmail { get; set; }

        [Required]
        [StringLength(255)]
        public string ContactName { get; set; }

        public string ContactPhone { get; set; }
        public ICollection<VehicleFeature> Features { get; set; }
        public int Id { get; set; }
        public bool IsRegistered { get; set; }
        public DateTime LastUpdate { get; set; }
        public Model Model { get; set; }
        public int ModelId { get; set; }
        public ICollection<Photo> Photos { get; set; }
    }
}
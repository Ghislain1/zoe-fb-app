using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VegaComp.Models
{
    public class Feature
    {
        public int Id { get; set; }

        public DateTime LastUpdate { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }
    }
}
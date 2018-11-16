﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VegaComp.Models
{
    public class Photo
    {
        [Required]
        [StringLength(255)]
        public string FileName { get; set; }

        public int Id { get; set; }

        public int VehicleId { get; set; } // relationship with Vehicle!! TODO
    }
}
﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaHome.Interfaces;

namespace VegaHome.Models
{
    public class VehicleQuery : IQueryObject
    {
        public bool IsSortAscending { get; set; }
        public int? MakeId { get; set; }
        public int? ModelId { get; set; }
        public int Page { get; set; }
        public byte PageSize { get; set; }
        public string SortBy { get; set; }
    }
}
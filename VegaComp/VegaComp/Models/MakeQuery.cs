using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaComp.Interfaces;

namespace VegaComp.Models
{
    public class MakeQuery : IQueryObject
    {
        public bool IsAfricaManifacturer { get; set; }
        public bool IsSortAscending { get; set; }
        public int Page { get; set; }
        public byte PageSize { get; set; }
        public string SortBy { get; set; }
    }
}
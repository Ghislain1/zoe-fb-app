using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VegaComp.Controllers.Resources
{
    public class QueryResultResource<T>
    {
        public IEnumerable<T> Items { get; set; }
        public int TotalItems { get; set; }
    }
}
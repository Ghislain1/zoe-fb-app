using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VegaComp.Controllers.Resources
{
    public class SaveModelResource
    {
        public int Id { get; set; }

        public DateTime LastUpdate { get; set; }

        public MakeResource Make { get; set; }

        public int MakeId { get; set; }

        public string Name { get; set; }
    }
}
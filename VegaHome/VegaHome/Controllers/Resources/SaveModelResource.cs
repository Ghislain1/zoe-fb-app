using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VegaHome.Controllers.Resources
{
    public class SaveModelResource
    {
        public string Class { get; set; }
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public MakeResource Make { get; set; }
        public int MakeId { get; set; }

        public string Name { get; set; }

        public string Predecessor { get; set; }
        public string PYear { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VegaComp.Controllers.Resources
{
    public class ModelResource
    {
        public int Id { get; set; }
 
        public string Name { get; set; }
        


        //TODOD: This cause a Loop
        //public Make Make { get; set; }
        //public int MakeId { get; set; } //TODO why? es gibt erkärung --> see Buidling the Domain Model


    }
}

using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaComp.Controllers.Resources;
using VegaComp.Models;

namespace VegaComp.Mapping
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            //
           this. CreateMap<Make, MakeResource>();
           this.CreateMap<Model, ModelResource>();
        }
    }
}

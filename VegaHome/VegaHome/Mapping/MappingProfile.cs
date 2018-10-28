using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaHome.Controllers.Resources;
using VegaHome.Models;

namespace VegaHome.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            base.CreateMap<Make, MakeResource>();
            base.CreateMap<Model, ModelResource>();
        }
    }
}
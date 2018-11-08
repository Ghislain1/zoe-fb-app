using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaComp.Controllers.Resources;
using VegaComp.Models;

namespace VegaComp.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            //Domain to API Resource
            this.CreateMap<Make, MakeResource>();
            this.CreateMap<Model, ModelResource>();
            this.CreateMap<Feature, FeatureResource>();
            this.CreateMap<Vehicle, VehicleResource>()
                .ForMember(v => v.Contact, opt => opt.MapFrom(v => new ContactResource { Name = v.ConctactName, Email = v.ConctactEmail, Phone = v.ConctactPhone }))
                .ForMember(v => v.Features, opt => opt.MapFrom(v => v.Features.Select(vf => vf.FeatureId)));

            // API Resource  to Domain
            this.CreateMap<VehicleResource, Vehicle>()
                .ForMember(v => v.ConctactName, opt => opt.MapFrom(vr => vr.Contact.Name))
                 .ForMember(v => v.ConctactPhone, opt => opt.MapFrom(vr => vr.Contact.Phone))
                  .ForMember(v => v.ConctactEmail, opt => opt.MapFrom(vr => vr.Contact.Email))
                   .ForMember(v => v.Features, opt => opt.MapFrom(vr => vr.Features.Select(fId => new VehicleFeature { FeatureId = fId })));
        }
    }
}
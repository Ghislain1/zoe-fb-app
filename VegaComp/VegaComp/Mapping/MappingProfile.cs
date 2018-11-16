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
            ////Domain to API Resource
            //this.CreateMap<Photo, PhotoResource>();
            //this.CreateMap<Make, MakeResource>();
            //this.CreateMap<Model, ModelResource>();
            //this.CreateMap<Feature, FeatureResource>();
            //this.CreateMap<Vehicle, VehicleResource>()
            //    .ForMember(v => v.Contact, opt => opt.MapFrom(v => new ContactResource { Name = v.ContactName, Email = v.ContactEmail, Phone = v.ContactPhone }))
            //    .ForMember(v => v.Features, opt => opt.MapFrom(v => v.Features.Select(vf => vf.FeatureId)));

            //// API Resource  to Domain
            //this.CreateMap<VehicleResource, Vehicle>()
            //    .ForMember(v => v.ContactName, opt => opt.MapFrom(vr => vr.Contact.Name))
            //     .ForMember(v => v.ContactPhone, opt => opt.MapFrom(vr => vr.Contact.Phone))
            //      .ForMember(v => v.ContactEmail, opt => opt.MapFrom(vr => vr.Contact.Email))
            //       .ForMember(v => v.Features, opt => opt.MapFrom(vr => vr.Features.Select(fId => new VehicleFeature { FeatureId = fId })));

            // API Resource to Domain
            CreateMap<VehicleQueryResource, VehicleQuery>();
            CreateMap<FeatureResource, Feature>(); //TODO: why?
            CreateMap<SaveFeatureResource, Feature>(); //TODO: why?

            CreateMap<SaveVehicleResource, Vehicle>()
              .ForMember(v => v.Id, opt => opt.Ignore())
              .ForMember(v => v.ContactName, opt => opt.MapFrom(vr => vr.Contact.Name))
              .ForMember(v => v.ContactEmail, opt => opt.MapFrom(vr => vr.Contact.Email))
              .ForMember(v => v.ContactPhone, opt => opt.MapFrom(vr => vr.Contact.Phone))
              .ForMember(v => v.Features, opt => opt.Ignore())
              .AfterMap((vr, v) =>
              {
                  // Remove unselected features
                  var removedFeatures = v.Features.Where(f => !vr.Features.Contains(f.FeatureId)).ToList();
                  foreach (var f in removedFeatures)
                      v.Features.Remove(f);

                  // Add new features
                  var addedFeatures = vr.Features.Where(id => !v.Features.Any(f => f.FeatureId == id)).Select(id => new VehicleFeature { FeatureId = id }).ToList();
                  foreach (var f in addedFeatures)
                      v.Features.Add(f);
              });

            // Domain to API Resource
            CreateMap<Feature, FeatureResource>();
            CreateMap<SaveFeatureResource, Feature>();

            CreateMap<Photo, PhotoResource>();
            CreateMap(typeof(QueryResult<>), typeof(QueryResultResource<>));
            CreateMap<Make, MakeResource>();
            CreateMap<Make, KeyValuePairResource>();
            CreateMap<Model, KeyValuePairResource>();
            CreateMap<Feature, KeyValuePairResource>();
            CreateMap<Vehicle, SaveVehicleResource>()
              .ForMember(vr => vr.Contact, opt => opt.MapFrom(v => new ContactResource { Name = v.ContactName, Email = v.ContactEmail, Phone = v.ContactPhone }))
              .ForMember(vr => vr.Features, opt => opt.MapFrom(v => v.Features.Select(vf => vf.FeatureId)));
            CreateMap<Vehicle, VehicleResource>()
              .ForMember(vr => vr.Make, opt => opt.MapFrom(v => v.Model.Make))
              .ForMember(vr => vr.Contact, opt => opt.MapFrom(v => new ContactResource { Name = v.ContactName, Email = v.ContactEmail, Phone = v.ContactPhone }))
              .ForMember(vr => vr.Features, opt => opt.MapFrom(v => v.Features.Select(vf => new KeyValuePairResource { Id = vf.Feature.Id, Name = vf.Feature.Name })));
        }
    }
}
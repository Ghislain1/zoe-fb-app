
namespace VegaComp.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using AutoMapper;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using VegaComp.Controllers.Resources;
    using VegaComp.Models;
    using VegaComp.Persistences;

    [Route("/api/vehicles")]
    public class VehiclesController : Controller
    {
        private readonly VegaDbContext context;
        private readonly IMapper mapper;
        public VehiclesController(VegaDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        //TODO- why fromBody attribut?--> API Resources Vs Domain Classes
        [HttpPost]
        public async Task<IActionResult>CreateVehicle([FromBody]VehicleResource vehicle) 
        {
            
            var veh= this.mapper.Map<VehicleResource, Vehicle>(vehicle);
            veh.LastUpdate = DateTime.Now;

            this.context.Vehicles.Add(veh);
            await   context.SaveChangesAsync();

           var result=  this.mapper.Map<Vehicle, VehicleResource>(veh);
            return base.Ok(result);
        }

        [HttpGet("/api/makes")]
        public  async Task<IEnumerable<MakeResource>> GetMakes()
        {
            var makes = await this.context.Makes.Include(m => m.Models).ToListAsync();

            return mapper.Map<List<Make>, List<MakeResource>>(makes);
        } 
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VegaHome.Controllers.Resources;
using VegaHome.Models;
using VegaHome.Persistence;

namespace VegaHome.Controllers
{
    public class MakesController : Controller
    {
        private readonly IMapper mapper;
        private readonly VegaDbContext vegaDbContext;

        public MakesController(VegaDbContext vegaDbContext, IMapper mapper)
        {
            this.vegaDbContext = vegaDbContext;
            this.mapper = mapper;
        }

        [HttpGet("/api/makes")]
        public async Task<IEnumerable<MakeResource>> GetMakes()
        {
            var list = await this.vegaDbContext.Makes.Include(m => m.Models).ToListAsync();
            return this.mapper.Map<List<Make>, List<MakeResource>>(list);
        }
    }
}
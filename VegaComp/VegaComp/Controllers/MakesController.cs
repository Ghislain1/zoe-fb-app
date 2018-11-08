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
    using VegaComp.Interfaces;
    using VegaComp.Models;
    using VegaComp.Persistence;

    [Route("api/[controller]")]
    public class MakesController : Controller
    {
        private readonly VegaDbContext context;
        private readonly IMakeRepository makeRepository;
        private readonly IMapper mapper;
        private readonly IUnitOfWork unitOfWork;

        public MakesController(VegaDbContext context, IMapper mapper, IMakeRepository makeRepository, IUnitOfWork unitOfWork)
        {
            this.context = context;
            this.mapper = mapper;
            this.makeRepository = makeRepository;
            this.unitOfWork = unitOfWork;
        }

        [HttpPost]
        public async Task<IActionResult> CreateMake([FromBody] SaveMakeResource makeResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var make = mapper.Map<SaveMakeResource, Make>(makeResource);
            make.LastUpdate = DateTime.Now;

            this.makeRepository.Add(make);
            await this.unitOfWork.CompleteAsync();

            make = await this.makeRepository.GetMake(make.Id);

            var result = this.mapper.Map<Make, MakeResource>(make);

            return Ok(result);
        }

        [HttpGet("/api/makes")]
        public async Task<IEnumerable<MakeResource>> GetMakes()
        {
            var makes = await this.context.Makes.Include(m => m.Models).ToListAsync();

            return mapper.Map<List<Make>, List<MakeResource>>(makes);
        }
    }
}
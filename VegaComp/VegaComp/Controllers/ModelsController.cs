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
    public class ModelsController : Controller
    {
        private readonly VegaDbContext context;
        private readonly IMapper mapper;
        private readonly IModelRepository modelRepository;
        private readonly IUnitOfWork unitOfWork;

        public ModelsController(VegaDbContext context, IMapper mapper, IModelRepository modelRepository, IUnitOfWork unitOfWork)
        {
            this.context = context;
            this.mapper = mapper;
            this.modelRepository = modelRepository;
            this.unitOfWork = unitOfWork;
        }

        [HttpPost]
        public async Task<IActionResult> CreateModel([FromBody] SaveModelResource modelResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var model = mapper.Map<SaveModelResource, Model>(modelResource);
            model.LastUpdate = DateTime.Now;

            this.modelRepository.Add(model);
            await this.unitOfWork.CompleteAsync();

            model = await this.modelRepository.GetModel(model.Id);

            var result = mapper.Map<Model, ModelResource>(model);

            return Ok(result);
        }

        [HttpGet("/api/models")]
        public async Task<IEnumerable<ModelResource>> GetModels()
        {
            var models = await this.context.Models.ToListAsync();

            return mapper.Map<List<Model>, List<ModelResource>>(models);
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateModel(int id, [FromBody] SaveModelResource modelResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var model = await this.modelRepository.GetModel(id);

            if (model == null)
            {
                return NotFound();
            }

            mapper.Map<SaveModelResource, Model>(modelResource, model);
            model.LastUpdate = DateTime.Now;

            await unitOfWork.CompleteAsync();

            model = await this.modelRepository.GetModel(model.Id);
            var result = mapper.Map<Model, ModelResource>(model);

            return Ok(result);
        }
    }
}
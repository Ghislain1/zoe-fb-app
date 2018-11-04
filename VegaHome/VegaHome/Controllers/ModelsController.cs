using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaHome.Controllers.Resources;
using VegaHome.Interfaces;
using VegaHome.Models;

namespace VegaHome.Controllers
{
    [Route("/api/models")]
    public class ModelsController : Controller
    {
        private readonly IMapper mapper;
        private readonly IVehicleRepository repository;
        private readonly IUnitOfWork unitOfWork;

        public ModelsController(IMapper mapper, IVehicleRepository repository, IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
            this.repository = repository;
            this.mapper = mapper;
        }

        [HttpPost]
        //[Authorize]
        public async Task<IActionResult> Create([FromBody] SaveModelResource modelResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var model = mapper.Map<SaveModelResource, Model>(modelResource);

            repository.AddModel(model);
            await unitOfWork.CompleteAsync();

            model = await repository.GetVehicleModel(model.Id);

            var result = mapper.Map<Model, ModelResource>(model);

            return Ok(result);
        }
    }
}
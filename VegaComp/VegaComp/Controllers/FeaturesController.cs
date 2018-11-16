using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaComp.Controllers.Resources;
using VegaComp.Interfaces;
using VegaComp.Models;
using VegaComp.Persistence;

namespace VegaComp.Controllers
{
    [Route("api/[controller]")]
    public class FeaturesController : Controller
    {
        private readonly VegaDbContext context;
        private readonly IFeatureRepository featureRepository;
        private readonly IMapper mapper;
        private readonly IUnitOfWork unitOfWork;

        public FeaturesController(IFeatureRepository featureRepository, IUnitOfWork unitOfWork, VegaDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;
            this.unitOfWork = unitOfWork;
            this.featureRepository = featureRepository;
        }

        [HttpPost]
        // [Authorize] --> later
        public async Task<IActionResult> CreateFeature([FromBody] SaveFeatureResource featureResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var feature = mapper.Map<SaveFeatureResource, Feature>(featureResource);
            feature.LastUpdate = DateTime.Now;

            featureRepository.Add(feature);
            await unitOfWork.CompleteAsync();

            feature = await featureRepository.GetFeature(feature.Id);

            var result = mapper.Map<Feature, FeatureResource>(feature);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        //  [Authorize]
        public async Task<IActionResult> DeleteFeature(int id)
        {
            var Feature = await featureRepository.GetFeature(id, includeRelated: false);

            if (Feature == null)
                return NotFound();

            featureRepository.Remove(Feature);
            await unitOfWork.CompleteAsync();

            return Ok(id);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFeature(int id)
        {
            var Feature = await featureRepository.GetFeature(id);

            if (Feature == null)
                return NotFound();

            var FeatureResource = mapper.Map<Feature, FeatureResource>(Feature);

            return Ok(FeatureResource);
        }

        [HttpGet]
        public async Task<IEnumerable<FeatureResource>> GetFeatures()
        {
            var list = await featureRepository.GetFeatures();

            return mapper.Map<IEnumerable<Feature>, IEnumerable<FeatureResource>>(list);
        }

        [HttpPut("{id}")]
        //  [Authorize]
        public async Task<IActionResult> UpdateFeature(int id, [FromBody] SaveFeatureResource FeatureResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var Feature = await featureRepository.GetFeature(id);

            if (Feature == null)
                return NotFound();

            mapper.Map<SaveFeatureResource, Feature>(FeatureResource, Feature);
            Feature.LastUpdate = DateTime.Now;

            await unitOfWork.CompleteAsync();

            Feature = await featureRepository.GetFeature(Feature.Id);
            var result = mapper.Map<Feature, FeatureResource>(Feature);

            return Ok(result);
        }
    }
}
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaComp.Interfaces;
using VegaComp.Models;

namespace VegaComp.Persistence
{
    public class FeatureRepository : IFeatureRepository
    {
        private readonly VegaDbContext vegaDbContext;

        public FeatureRepository(VegaDbContext vegaDbContext)
        {
            this.vegaDbContext = vegaDbContext;
        }

        public void Add(Feature feature)
        {
            this.vegaDbContext.Features.Add(feature);
        }

        public async Task<Feature> GetFeature(int id, bool includeRelated = true)
        {
            return await this.vegaDbContext.Features.FindAsync(id);
        }

        public async Task<IEnumerable<Feature>> GetFeatures()
        {
            return await this.vegaDbContext.Features.ToListAsync();
        }

        public void Remove(Feature feature)
        {
            this.vegaDbContext.Features.Remove(feature);
        }
    }
}
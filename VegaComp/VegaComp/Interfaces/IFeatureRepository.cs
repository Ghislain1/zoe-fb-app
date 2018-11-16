using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaComp.Models;

namespace VegaComp.Interfaces
{
    public interface IFeatureRepository
    {
        void Add(Feature Feature);

        Task<Feature> GetFeature(int id, bool includeRelated = true);

        Task<IEnumerable<Feature>> GetFeatures();

        void Remove(Feature Feature);
    }
}
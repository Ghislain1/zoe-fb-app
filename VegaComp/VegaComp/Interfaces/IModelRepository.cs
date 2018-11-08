using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaComp.Models;

namespace VegaComp.Interfaces
{
    public interface IModelRepository
    {
        void Add(Model model);

        /// <summary>
        ///
        /// </summary>
        /// <param name="id"></param>
        /// <param name="includeRelated">true this should provide a list of models </param>
        /// <returns></returns>
        Task<Model> GetModel(int id);

        Task<QueryResult<Model>> GetModels(ModelQuery filter);

        void Remove(Model model);
    }
}
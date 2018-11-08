using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaComp.Models;

namespace VegaComp.Interfaces
{
    public interface IMakeRepository
    {
        void Add(Make make);

        /// <summary>
        ///
        /// </summary>
        /// <param name="id"></param>
        /// <param name="includeRelated">true this should provide a list of models </param>
        /// <returns></returns>
        Task<Make> GetMake(int id, bool includeRelated = true);

        Task<QueryResult<Make>> GetMakes(MakeQuery filter);

        void Remove(Make make);
    }
}
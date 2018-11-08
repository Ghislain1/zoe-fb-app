using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VegaComp.Interfaces
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}
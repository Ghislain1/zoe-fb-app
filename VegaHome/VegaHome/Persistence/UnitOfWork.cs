using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaHome.Interfaces;

namespace VegaHome.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly VegaDbContext context;

        public UnitOfWork(VegaDbContext context)
        {
            this.context = context;
        }

        public async Task CompleteAsync()
        {
            await context.SaveChangesAsync();
        }
    }
}
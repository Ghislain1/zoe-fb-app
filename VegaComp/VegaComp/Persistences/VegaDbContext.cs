

namespace VegaComp.Persistences
{
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using VegaComp.Models;

    public class VegaDbContext:DbContext
    {
        public VegaDbContext(DbContextOptions<VegaDbContext> dbContextOptions) : base(dbContextOptions)
        {

        }

        public DbSet<Make> Makes { get; set; }

    }
}

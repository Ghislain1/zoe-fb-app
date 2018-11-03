using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaHome.Models;

namespace VegaHome.Persistence
{
    public class VegaDbContext : DbContext
    {
        public VegaDbContext(DbContextOptions<VegaDbContext> connectionString) : base(connectionString)
        {
        }

        public DbSet<Feature> Features { get; set; }
        public DbSet<Make> Makes { get; set; }
    }
}
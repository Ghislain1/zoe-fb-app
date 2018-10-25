namespace vega.Persistence {
    using System.Collections;
    using Microsoft.EntityFrameworkCore;
    using vega.Models;
    /// e.g BMV, Merceds, Mazda.!--.
    public class VegaDbContext : DbContext {
        //TODO-GHislain: This is all varainte
        // public VegaDbContext(string connectionString) : base(connectionString)
        // {
        //     //
        // }

        public VegaDbContext (DbContextOptions<VegaDbContext> options) : base (options) {

        }

        public DbSet<Make> Makes { get; set; }

        //TODo-GHislain why?
        //  public DbSet<Model> Makes { get; set; }
    }
}
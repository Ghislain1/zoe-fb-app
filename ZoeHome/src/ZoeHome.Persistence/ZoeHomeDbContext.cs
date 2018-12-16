using Microsoft.EntityFrameworkCore;
using System;
using ZoeHome.Domain.Entities;
using ZoeHome.Persistence.Extensions;

namespace ZoeHome.Persistence
{
    public class ZoeHomeDbContext : DbContext
    {
        public ZoeHomeDbContext(DbContextOptions<ZoeHomeDbContext> options) : base(options)
        {
        }

        public DbSet<Album> Albums { get; set; }
        public DbSet<Artist> Artists { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyAllConfigurations();
        }
    }
}
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace ZoeHome.Persistence
{
    /// <summary>
    /// Why this class--&gt; for Migration ----&gt; Il faut comprendre
    /// </summary>
    public class ZoeHomeDbContextFactory : DesignTimeDbContextFactoryBase<ZoeHomeDbContext>
    {
        protected override ZoeHomeDbContext CreateNewInstance(DbContextOptions<ZoeHomeDbContext> options)
        {
            return new ZoeHomeDbContext(options);
        }
    }
}
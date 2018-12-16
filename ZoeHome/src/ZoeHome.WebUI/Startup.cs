using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using ZoeHome.Application.Interface;
using ZoeHome.Infrastructure;
using ZoeHome.Persistence;
using Microsoft.EntityFrameworkCore;
using System.IO;
using ZoeHome.WebUI.Services;

namespace ZoeHome.WebUI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app,
            IMockDataImportService mockDataImportService,
            IHostingEnvironment env, ILoggerFactory loggerFactory,
            ZoeHomeDbContext zoeHomeDbContext,
            IConfiguration configuration)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();

            // Initialize Database if it doesn't exist
            mockDataImportService.EnsureAlbumData(zoeHomeDbContext, Path.Combine(env.ContentRootPath, "albums.js"));
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            // Add framework services.
            services.AddTransient<INotificationService, NotificationService>();
            services.AddTransient<IDateTimeService, MachineDateTimeService>();

            //Add MockDataImportService singleton!!!
            services.AddSingleton<IMockDataImportService, MockDataImportService>();

            // Cors policy is added to controllers via [EnableCors("CorsPolicy")] or
            // .UseCors("CorsPolicy") globally
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });

            //Add DBContext
            var connetionString = this.Configuration.GetConnectionString("Default");
            services.AddDbContext<ZoeHomeDbContext>(options => options.UseSqlServer(connetionString));
        }
    }
}
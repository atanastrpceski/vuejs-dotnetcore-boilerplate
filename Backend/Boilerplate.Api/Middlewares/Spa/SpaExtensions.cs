using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Boilerplate.Api.Middlewares.Spa
{
    public static class SpaExtensions
    {
        public static void ConfigureSpa(this IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = SpaOptions.WorkingDirectory;

                if (env.IsDevelopment())
                {
                    spa.UseVueDevelopmentServer(scriptName: "serve");
                }
            });
        }

    }
}

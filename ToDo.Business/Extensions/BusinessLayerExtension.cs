using Microsoft.Extensions.DependencyInjection;
using ToDo.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace ToDo.Business
{
    public static class BusinessLayerExtension
    {
        public static void AddBusinessLayer(this IServiceCollection services, Action<Configuration> configuration)
        {
            services.AddScoped<Services.Abstractions.ITaskService, Services.TaskService>();

            var configurationOptions = new Configuration();
            configuration.Invoke(configurationOptions);
            services.AddDataLayer(c =>
            {
                c.SqlLiteConnectionString = configurationOptions.SqlLiteConnectionString;
            });
        }
    }
}
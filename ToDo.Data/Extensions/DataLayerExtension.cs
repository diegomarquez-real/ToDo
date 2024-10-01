using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDo.Data
{
    public static class DataLayerExtension
    {
        public static void AddDataLayer(this IServiceCollection services, Action<Configuration> configuration)
        {
            var configurationOptions = new Configuration();
            configuration.Invoke(configurationOptions);
            services.AddDbContext<ToDoContext>(options =>
            {
                options.UseSqlite(configurationOptions.SqlLiteConnectionString);
            });
        }
    }
}
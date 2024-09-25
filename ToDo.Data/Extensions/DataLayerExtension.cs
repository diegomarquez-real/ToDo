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
        public static void AddDataLayer(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ToDoContext>(options =>
            {
                options.UseSqlite(configuration.GetConnectionString("SqlLiteConnection"));
            });
        }
    }
}
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDo.Business.Mapping
{
    public class TaskMappingProfile : Profile
    {
        public TaskMappingProfile()
        {
            CreateMap<Data.Models.Task, Models.TaskModel>();
            //CreateMap<List<Data.Models.Task>, List<Models.TaskModel>>();
            CreateMap<Models.Create.CreateTaskModel, Data.Models.Task>();
        }
    }
}
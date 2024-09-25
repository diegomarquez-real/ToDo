using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDo.Business.Services
{
    public class TaskService : Abstractions.ITaskService
    {
        private readonly IMapper _mapper;
        private readonly Data.ToDoContext _toDoContext;

        public TaskService(IMapper mapper, 
            Data.ToDoContext toDoContext)
        {
            _mapper = mapper;
            _toDoContext = toDoContext;
        }

        public async Task<int> CreateTaskAsync(Models.Create.CreateTaskModel createTaskModel)
        {
            var task = _mapper.Map<Data.Models.Task>(createTaskModel);
            var result = await _toDoContext.Tasks.AddAsync(task);
            await _toDoContext.SaveChangesAsync();

            return result.Entity.TaskId;
        }

        public async Task<IEnumerable<Models.TaskModel>> GetTasksAsync()
        {
            var tasks = await _toDoContext.Tasks.ToListAsync();

            return _mapper.Map<IEnumerable<Models.TaskModel>>(tasks);
        }
    }
}
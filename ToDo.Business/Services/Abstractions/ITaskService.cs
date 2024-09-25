using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDo.Business.Services.Abstractions
{
    public interface ITaskService
    {
        Task<IEnumerable<Models.TaskModel>> GetTasksAsync();
        Task<int> CreateTaskAsync(Models.Create.CreateTaskModel createTaskModel);
        Task DeleteTaskAsync(int taskId);
    }
}
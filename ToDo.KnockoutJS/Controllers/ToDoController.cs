using Microsoft.AspNetCore.Mvc;

namespace ToDo.KnockoutJS.Controllers
{
    public class ToDoController : Controller
    {
        private readonly Business.Services.Abstractions.ITaskService _taskService;

        public ToDoController(Business.Services.Abstractions.ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet]
        public async Task<JsonResult> GetAllAsync()
        {
            var taskModels = await _taskService.GetTasksAsync();

            return Json(taskModels);
        }
    }
}

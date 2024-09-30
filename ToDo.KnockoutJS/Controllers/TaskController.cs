using Microsoft.AspNetCore.Mvc;

namespace ToDo.KnockoutJS.Controllers
{
    public class TaskController : Controller
    {
        private readonly Business.Services.Abstractions.ITaskService _taskService;

        public TaskController(Business.Services.Abstractions.ITaskService taskService)
        {
            _taskService = taskService;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GetAddEditTaskModal(int? id)
        {
            return PartialView("_AddEditTask");
        }

        [HttpGet]
        public IActionResult GetDeleteTaskModal()
        {
            return PartialView("_DeleteTask");
        }

        [HttpGet]
        public async Task<JsonResult> GetAllAsync()
        {
            var taskModels = await _taskService.GetTasksAsync();

            return Json(taskModels);
        }

        [HttpPost]
        public async Task<JsonResult> CreateAsync([FromBody] Business.Models.Create.CreateTaskModel createTaskModel)
        {
            var taskId = await _taskService.CreateTaskAsync(createTaskModel);

            return Json(taskId);
        }

        [HttpPost("[controller]/[action]/{id}")]
        public async Task<JsonResult> UpdateAsync(int id, [FromBody] Business.Models.Update.UpdateTaskModel updateTaskModel)
        {
            await _taskService.UpdateTaskAsync(id, updateTaskModel);

            return Json(true);
        }

        [HttpPost("[controller]/[action]/{id}")]
        public async Task<JsonResult> DeleteAsync(int id)
        {
            await _taskService.DeleteTaskAsync(id);

            return Json(true);
        }
    }
}

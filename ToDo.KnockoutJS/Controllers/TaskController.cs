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

        [HttpGet("[controller]/[action]/{id?}")]
        public IActionResult AddEditTask(int? id)
        {
            ViewData["Title"] = id.HasValue ? "Edit Task" : "Add Task";

            return PartialView("_AddEditTask");
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
    }
}

using Microsoft.AspNetCore.Mvc;

namespace ToDo.KnockoutJS.Controllers
{
    public class ToDoController : Controller
    { 
        private readonly string[] _toDos = new string[] { "To Do 1", "To Do 2", "To Do 3" };

        public ToDoController()
        {
            
        }

        [HttpGet]
        public JsonResult GetAll()
        {
            return Json(_toDos);
        }
    }
}

namespace TsWebApp.Controllers
{
    using Microsoft.AspNet.Mvc;

    // For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

    [Route("[controller]")]
    public class HomeController : Controller
    {
        public IActionResult Default()
        {
            return this.Json(new { });
        }
    }
}
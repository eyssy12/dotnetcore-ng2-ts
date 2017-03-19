namespace TsWebApp.Controllers
{
    using Microsoft.AspNet.Mvc;
    using Mvc;

    [ControllerRoute]
    public class HomeController : Controller
    {
        public IActionResult Default()
        {
            return this.Json(new { });
        }
    }
}
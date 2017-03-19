namespace TsWebApp.APIs
{
    using System;
    using System.Collections.Generic;
    using Microsoft.AspNet.Mvc;
    using Models;
    using Newtonsoft.Json;

    [Route("[controller]")]
    public class AboutController : Controller
    {
        [HttpGet]
        [Route(nameof(GetPeople))]
        public ActionResult GetPeople()
        {
            var result = JsonConvert.DeserializeObject<IEnumerable<Person>>(Resources.Data_People);

            return this.Json(result);
        }

        [HttpPut]
        [Route(nameof(LikeShiba))]
        public ActionResult LikeShiba([FromBody] ResourceLikeRequest request)
        {
            // Handle saving the state of the liked resource

            Console.WriteLine(request);

            return this.Ok();
        }
    }
}
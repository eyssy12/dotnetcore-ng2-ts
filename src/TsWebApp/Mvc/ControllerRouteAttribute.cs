namespace TsWebApp.Mvc
{
    using Microsoft.AspNet.Mvc;

    public class ControllerRouteAttribute : RouteAttribute
    {
        public const string ControllerPlaceholder = "[controller]";

        public ControllerRouteAttribute() : base(ControllerRouteAttribute.ControllerPlaceholder)
        {
        }
    }
}
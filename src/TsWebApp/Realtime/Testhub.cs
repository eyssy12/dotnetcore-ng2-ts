namespace TsWebApp.Realtime
{
    using System.Diagnostics;
    using System.Threading.Tasks;
    using Microsoft.AspNet.SignalR;
    using Microsoft.AspNet.SignalR.Hubs;

    [HubName("ChatHub")]
    public class Testhub : Hub
    {
        public override Task OnConnected()
        {
            Trace.TraceInformation("ChatHub - OnConnected");

            var user = GetAuthenticatedUser();

            Clients.All.OnUserConnected(user);

            return base.OnConnected();
        }

        private string GetAuthenticatedUser()
        {
            //var username = this.Context.QueryString["user"];
            var username = string.Empty;
            if (string.IsNullOrWhiteSpace(username))
                throw new System.Exception("Failed to authenticate user.");

            Trace.TraceInformation("GetAuthenticatedUser :" + username);

            return username;
        }
    }
}

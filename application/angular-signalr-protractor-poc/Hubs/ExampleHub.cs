using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;

namespace angular_signalr_protractor_poc.Hubs
{
    public class ExampleHub : Hub
    {
        public override Task OnConnected()
        {
            Clients.Caller.message("Hello from ExampleHub.OnConnected");
            return base.OnConnected();
        }

        public void Ping()
        {
            Clients.Caller.message("Pong from Hub");
        }
    }
}
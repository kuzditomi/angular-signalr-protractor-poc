using System.Web.Http;

namespace angular_signalr_protractor_poc.Controllers
{
    [RoutePrefix("api/examples")]
    public class ExamplesController : ApiController
    {
        [HttpGet]
        [Route("")]
        public IHttpActionResult GetAlphabet()
        {
            return Ok(new[] { "A", "B", "C" });
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using GraphEngine;

namespace YourNamespace.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class HelloController : ControllerBase
  {
    [HttpGet]
    public IActionResult Get([FromQuery] string expression)
    {
      string result = Hello.Main(expression);
      return Ok(result);
    }
  }
}

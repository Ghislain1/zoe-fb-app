using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace vega.Controllers {
    using System.Threading.Tasks;
    using vega.Models;

    [Route ("api/[controller]")]
    public class MakesController : Controller {

        [HttpGet ("[action]")]
        public async Task<IEnumerable<Make>> GetMakes () {

            return await Task.Factory.StartNew<List<Make>> (() => {
                List<Make> s = new List<Make> ();
                for (int k = 1; k < 10; k++) {
                    s.Add (new Make () { Id = k, Name = "Ghislain" });
                }
                return s;
            });

        }
    }
}
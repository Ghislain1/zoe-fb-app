using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VegaComp.Models
{
    /// <summary>
    /// This a representanst of "PhotoSettings"  appsettings.json --  man says: seetings will be map to key
    /// </summary>
    public class PhotoSettings
    {
        public string[] AcceptedFileTypes { get; set; }

        public int MaxBytes { get; set; } = 10485760; //why this number ??? --lolo 10MB= 10*1024*1024
    }
}
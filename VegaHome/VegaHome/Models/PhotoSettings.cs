using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace VegaHome.Models
{
    public class PhotoSettings
    {
        public string[] AcceptedFileTypes { get; set; }
        public int MaxBytes { get; set; }

        public bool IsSupported(string fileName)
        {
            return AcceptedFileTypes.Any(s => s == Path.GetExtension(fileName).ToLower());
        }
    }
}
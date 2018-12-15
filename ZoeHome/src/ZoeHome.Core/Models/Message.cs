using System;
using System.Collections.Generic;
using System.Text;

namespace ZoeHome.Core.Models
{
    public class Message
    {
        public string Body { get; set; }
        public string From { get; set; }
        public string Subject { get; set; }
        public string To { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlyGui.DataAccessLib.Models
{
    public class User
    {
        public string Fullname { get; set; }
        public int Id { get; set; }

        public string Password { get; set; }
        public string Username { get; set; }
    }
}
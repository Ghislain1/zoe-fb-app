using System;
using System.Collections.Generic;
using System.Text;

namespace ZoeHome.Domain.Entities
{
    public class User
    {
        public string Fullname { get; set; }
        public int Id { get; set; }

        public string Password { get; set; }
        public string Username { get; set; }
    }
}
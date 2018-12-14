using OnlyGui.DataAccessLib.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlyGui.DataAccessLib.Services
{
    public class OnlyGuiContext : IOnlyGuiContext
    {
        public ICollection<Album> Albums { get; set; }
        public ICollection<Artist> Artists { get; set; }
        public ICollection<Track> Tracks { get; set; }
        public ICollection<User> Users { get; set; }
    }
}
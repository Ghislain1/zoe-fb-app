using OnlyGui.DataAccessLib.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace OnlyGui.DataAccessLib
{
    public interface IOnlyGuiContext
    {
        ICollection<Album> Albums { get; set; }
        ICollection<Artist> Artists { get; set; }
        ICollection<Track> Tracks { get; set; }
        ICollection<User> Users { get; set; }

        void Add(Album album);

        void Add(Track track);

        void Add(User user);

        void SaveChanges();
    }
}
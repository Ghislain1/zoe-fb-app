using System;
using System.Collections.Generic;
using System.Text;

namespace OnlyGui.DataAccessLib.Models
{
    public class ArtistWithAlbumCount : Artist
    {
        public int AlbumCount { get; set; }
    }
}
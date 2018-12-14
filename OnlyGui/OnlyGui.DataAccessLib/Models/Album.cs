using System;
using System.Collections.Generic;
using System.Text;

namespace OnlyGui.DataAccessLib.Models
{
    public class Album
    {
        public Album()
        {
            Artist = new Artist();
            Tracks = new List<Track>();
        }

        public string AmazonUrl { get; set; }
        public virtual Artist Artist { get; set; }
        public int ArtistId { get; set; }
        public string Description { get; set; }
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string SpotifyUrl { get; set; }
        public string Title { get; set; }
        public virtual IList<Track> Tracks { get; set; }
        public int Year { get; set; }
    }
}
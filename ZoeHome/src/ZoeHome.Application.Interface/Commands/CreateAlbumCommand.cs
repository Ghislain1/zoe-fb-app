using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace ZoeHome.Application.Interface.Commands
{
    public class CreateAlbumCommand : IRequest<int>
    {
        public int ArtistId { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string SpotifyUrl { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Text;

namespace ZoeHome.Application.ViewModels
{
    public class AlbumsListViewModel
    {
        public bool CreateEnabled { get; set; }
        public IEnumerable<AlbumDto> Products { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Text;
using ZoeHome.Application.ViewModels;
using MediatR;

namespace ZoeHome.Application.Queries
{
    public class GetAlbumQuery : IRequest<AlbumViewModel>
    {
        public int Id { get; set; }
    }
}
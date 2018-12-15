using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace ZoeHome.Application.Interface.Commands
{
    public class DeleteAlbumCommand : IRequest
    {
        public int Id { get; set; }
    }
}
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace ZoeHome.Application.Interface.Commands
{
    public class CreateAlbumCommand : IRequest<int>
    {
    }
}
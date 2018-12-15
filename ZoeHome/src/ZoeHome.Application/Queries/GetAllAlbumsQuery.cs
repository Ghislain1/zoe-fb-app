using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using ZoeHome.Application.ViewModels;

namespace ZoeHome.Application.Queries
{
    public class GetAllAlbumsQuery : IRequest<AlbumsListViewModel>
    {
    }
}
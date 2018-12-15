using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ZoeHome.Application.Interface.Commands;
using ZoeHome.Application.Queries;
using ZoeHome.Application.ViewModels;

namespace ZoeHome.WebUI.Controllers
{
    public class AlbumsController : BaseController
    {
        // POST: api/albums
        [HttpPost]
        public async Task<ActionResult<int>> Create([FromBody] CreateAlbumCommand command)
        {
            var albumId = await Mediator.Send(command);

            return Ok(albumId);
        }

        // DELETE: api/albums/5
        [HttpDelete("{id}")]
        [ProducesResponseType((int)HttpStatusCode.NoContent)]
        public async Task<IActionResult> Delete(int id)
        {
            await Mediator.Send(new DeleteAlbumCommand { Id = id });

            return NoContent();
        }

        // GET: api/albums/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AlbumViewModel>> Get(int id)
        {
            return Ok(await Mediator.Send(new GetAlbumQuery { Id = id }));
        }

        // GET: api/albums
        [HttpGet]
        public async Task<ActionResult<AlbumsListViewModel>> GetAll()
        {
            return Ok(await Mediator.Send(new GetAllAlbumsQuery()));
        }

        // PUT: api/albums/5
        [HttpPut("{id}")]
        public async Task<ActionResult<AlbumDto>> Update([FromRoute] int id, [FromBody] UpdateAlbumCommand command)
        {
            return Ok(await Mediator.Send(command));
        }
    }
}
using OnlyGui.DataAccessLib.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OnlyGui.DataAccessLib
{
    public interface IAlbumRepository
    {
        Task<bool> DeleteAlbum(int id);

        Task<List<Album>> GetAllAlbums(int page = 0, int pageSize = 15);

        Task<Album> SaveAlbum(Album postedAlbum);
    }
}
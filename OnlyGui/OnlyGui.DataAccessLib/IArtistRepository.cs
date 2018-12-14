using OnlyGui.DataAccessLib.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OnlyGui.DataAccessLib
{
    public interface IArtistRepository
    {
        Task<bool> DeleteArtist(int id);

        Task<List<Album>> GetAlbumsForArtist(int artistId);

        Task<List<ArtistWithAlbumCount>> GetAllArtists();
    }
}
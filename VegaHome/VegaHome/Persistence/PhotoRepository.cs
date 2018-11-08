using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaHome.Interfaces;
using VegaHome.Models;

namespace VegaHome.Persistence
{
    public class PhotoRepository : IPhotoRepository
    {
        public Task<IEnumerable<Photo>> GetPhotos(int vehicleId)
        {
            throw new NotImplementedException();
        }
    }
}
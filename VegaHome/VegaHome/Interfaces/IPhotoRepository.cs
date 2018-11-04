using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaHome.Models;

namespace VegaHome.Interfaces
{
    public interface IPhotoRepository
    {
        Task<IEnumerable<Photo>> GetPhotos(int vehicleId);
    }
}
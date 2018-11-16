using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaComp.Models;

namespace VegaComp.Interfaces
{
    public interface IPhotoRepository
    {
        Task<IEnumerable<Photo>> GetPhotos(int vehicleId);
    }
}
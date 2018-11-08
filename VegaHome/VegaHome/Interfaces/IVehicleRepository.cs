using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VegaHome.Models;

namespace VegaHome.Interfaces
{
    public interface IVehicleRepository
    {
        void Add(Vehicle vehicle);

        void AddModel(Model modelC);

        Task<Vehicle> GetVehicle(int id, bool includeRelated = true);

        Task<QueryResult<Vehicle>> GetVehicles(VehicleQuery filter);

        void Remove(Vehicle vehicle);
        Task<Model> GetVehicleModel(int id);
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VegaHome.Interfaces
{
    public interface IQueryObject
    {
        bool IsSortAscending { get; set; }
        int Page { get; set; }
        byte PageSize { get; set; }
        string SortBy { get; set; }
    }
}
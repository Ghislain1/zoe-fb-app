using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using ZoeHome.Domain.Entities;

namespace ZoeHome.Application.ViewModels
{
    public class AlbumViewModel
    {
        public static Expression<Func<Album, AlbumViewModel>> Projection
        {
            get
            {
                return p => new AlbumViewModel
                {
                    AlbumId = p.Id,
                    AlbumName = p.Title,
                };
            }
        }

        public int AlbumId { get; set; }

        public string AlbumName { get; set; }

        public int? CategoryId { get; set; }
        public string CategoryName { get; set; }
        public bool DeleteEnabled { get; set; }
        public bool Discontinued { get; set; }
        public bool EditEnabled { get; set; }
        public string SupplierCompanyName { get; set; }
        public int? SupplierId { get; set; }
        public decimal? UnitPrice { get; set; }

        public static AlbumViewModel Create(Album Album)
        {
            return Projection.Compile().Invoke(Album);
        }
    }
}
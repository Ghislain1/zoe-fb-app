using System;
using System.Linq.Expressions;
using ZoeHome.Domain.Entities;

namespace ZoeHome.Application.ViewModels
{
    public class AlbumDto
    {
        public static Expression<Func<Album, AlbumDto>> Projection
        {
            get
            {
                return p => new AlbumDto
                {
                    AlbumId = p.AlbumId,

                    //UnitPrice = p.UnitPrice,
                    //SupplierId = p.SupplierId,
                };
            }
        }

        public int AlbumId { get; set; }

        public string AlbumName { get; set; }

        public int? CategoryId { get; set; }
        public string CategoryName { get; set; }
        public bool Discontinued { get; set; }
        public string SupplierCompanyName { get; set; }
        public int? SupplierId { get; set; }
        public decimal? UnitPrice { get; set; }

        public static AlbumDto Create(Album album)
        {
            return Projection.Compile().Invoke(album);
        }
    }
}
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using ZoeHome.Domain.Entities;

namespace ZoeHome.Persistence.Configurations
{
    public class AlbumConfiguration : IEntityTypeConfiguration<Album>
    {
        public void Configure(EntityTypeBuilder<Album> builder)
        {
            builder.HasKey(e => e.AlbumId);

            builder.Property(e => e.AlbumId).HasColumnName("AlbumId");

            // builder.Property(e => e.CategoryId).HasColumnName("CategoryID");

            builder.Property(e => e.Title).IsRequired().HasMaxLength(40);

            builder.Property(e => e.ImageUrl).HasMaxLength(120);

            builder.Property(e => e.Year).HasDefaultValueSql("((2000))");

            builder.Property(e => e.ArtistId).HasColumnName("ArtistId");

            //builder.Property(e => e.UnitPrice)
            //    .HasColumnType("money")
            //    .HasDefaultValueSql("((0))");

            //builder.Property(e => e.UnitsInStock).HasDefaultValueSql("((0))");

            //builder.Property(e => e.UnitsOnOrder).HasDefaultValueSql("((0))");

            //builder.HasOne(d => d.Category)
            //    .WithMany(p => p.Products)
            //    .HasForeignKey(d => d.CategoryId)
            //    .HasConstraintName("FK_Products_Categories");

            //builder.HasOne(d => d.Supplier)
            //    .WithMany(p => p.Products)
            //    .HasForeignKey(d => d.SupplierId)
            //    .HasConstraintName("FK_Products_Suppliers");
        }
    }
}
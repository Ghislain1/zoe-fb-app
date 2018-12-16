using Microsoft.EntityFrameworkCore.Migrations;

namespace ZoeHome.Persistence.Migrations
{
    public partial class ChangedAlbumId_1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AlbumId",
                table: "Albums",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Albums",
                newName: "AlbumId");
        }
    }
}

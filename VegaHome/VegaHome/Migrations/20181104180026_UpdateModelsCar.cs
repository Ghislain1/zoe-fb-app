using Microsoft.EntityFrameworkCore.Migrations;

namespace VegaHome.Migrations
{
    public partial class UpdateModelsCar : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Class",
                table: "Models",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Models",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PYear",
                table: "Models",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Predecessor",
                table: "Models",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Class",
                table: "Models");

            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Models");

            migrationBuilder.DropColumn(
                name: "PYear",
                table: "Models");

            migrationBuilder.DropColumn(
                name: "Predecessor",
                table: "Models");
        }
    }
}

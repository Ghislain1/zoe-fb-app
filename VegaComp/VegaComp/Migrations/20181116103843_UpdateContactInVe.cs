using Microsoft.EntityFrameworkCore.Migrations;

namespace VegaComp.Migrations
{
    public partial class UpdateContactInVe : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ConctactPhone",
                table: "Vehicles",
                newName: "ContactPhone");

            migrationBuilder.RenameColumn(
                name: "ConctactName",
                table: "Vehicles",
                newName: "ContactName");

            migrationBuilder.RenameColumn(
                name: "ConctactEmail",
                table: "Vehicles",
                newName: "ContactEmail");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ContactPhone",
                table: "Vehicles",
                newName: "ConctactPhone");

            migrationBuilder.RenameColumn(
                name: "ContactName",
                table: "Vehicles",
                newName: "ConctactName");

            migrationBuilder.RenameColumn(
                name: "ContactEmail",
                table: "Vehicles",
                newName: "ConctactEmail");
        }
    }
}

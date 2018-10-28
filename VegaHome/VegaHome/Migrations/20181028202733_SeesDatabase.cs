using Microsoft.EntityFrameworkCore.Migrations;

namespace VegaHome.Migrations
{
    public partial class SeesDatabase : Migration
    {
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Makes WHERE Name IN ('MAKE1', 'MAKE2', 'MAKE3', 'MAKE4')");

            //DONT NEED THIS LINE
            /// migrationBuilder.Sql("DELETE FROM MODELS");
        }

        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('MAKE1')");
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('MAKE2')");
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('MAKE3')");
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('MAKE4')");

            //Models
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('MAKE1-ModelA', (SELECT Id FROM Makes WHERE Name='MAKE1'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('MAKE1-ModelB', (SELECT Id FROM Makes WHERE Name='MAKE1'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('MAKE1-Model_C', (SELECT Id FROM Makes WHERE Name='MAKE1'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('MAKE1-Model_D', (SELECT Id FROM Makes WHERE Name='MAKE1'))");

            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('MAKE2-ModelA', (SELECT Id FROM Makes WHERE Name='MAKE2'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('MAKE2-ModelB', (SELECT Id FROM Makes WHERE Name='MAKE2'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('MAKE2-Model_C', (SELECT Id FROM Makes WHERE Name='MAKE2'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('MAKE2-Model_D', (SELECT Id FROM Makes WHERE Name='MAKE2'))");

            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('MAKE3-ModelA', (SELECT Id FROM Makes WHERE Name='MAKE3'))"); migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('MAKE3-ModelB', 3)");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('MAKE3-Model_C',  (SELECT Id FROM Makes WHERE Name='MAKE3'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('MAKE3-Model_D',  (SELECT Id FROM Makes WHERE Name='MAKE3'))");

            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('MAKE4-ModelA',  (SELECT Id FROM Makes WHERE Name='MAKE4'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('MAKE4-ModelB',  (SELECT Id FROM Makes WHERE Name='MAKE4'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('MAKE4-Model_C', (SELECT Id FROM Makes WHERE Name='MAKE4'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeId) VALUES ('MAKE4-Model_D', (SELECT Id FROM Makes WHERE Name='MAKE4'))");
        }
    }
}
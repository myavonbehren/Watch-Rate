using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ReviewAPI.Migrations.ShowDb
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Shows",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Username = table.Column<string>(type: "TEXT", nullable: false),
                    Title = table.Column<string>(type: "TEXT", maxLength: 200, nullable: false),
                    isWatched = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shows", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Shows",
                columns: new[] { "Id", "Title", "Username", "isWatched" },
                values: new object[,]
                {
                    { 1, "Sopranos", "mannydelgado", false },
                    { 2, "The Office", "mannydelgado", false },
                    { 3, "Friends", "mannydelgado", true },
                    { 4, "Spongebob", "mannydelgado", true },
                    { 5, "Star Trek: The Next Generation", "phil_dunphy", false },
                    { 6, "Stranger Things", "phil_dunphy", false },
                    { 7, "Rick and Morty", "phil_dunphy", true },
                    { 8, "Lost", "phil_dunphy", true },
                    { 10, "The Office", "cam_tucker", true },
                    { 11, "Overcompensating", "cam_tucker", false },
                    { 12, "Euphoria", "cam_tucker", false }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Shows");
        }
    }
}

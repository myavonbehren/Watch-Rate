using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ReviewAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Reviews",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Username = table.Column<string>(type: "TEXT", nullable: false),
                    Title = table.Column<string>(type: "TEXT", maxLength: 200, nullable: false),
                    Content = table.Column<string>(type: "TEXT", maxLength: 300, nullable: false),
                    Rating = table.Column<int>(type: "INTEGER", nullable: false),
                    Liked = table.Column<bool>(type: "INTEGER", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reviews", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Reviews",
                columns: new[] { "Id", "Content", "CreatedAt", "Liked", "Rating", "Title", "UpdatedAt", "Username" },
                values: new object[,]
                {
                    { 1, "Funny show!", new DateTime(2025, 5, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), true, 3, "Friends", new DateTime(2025, 5, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), "manny_d" },
                    { 2, "Great show!", new DateTime(2025, 5, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), true, 4, "Sopranos", new DateTime(2025, 5, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), "gloria_p" },
                    { 3, "Great animation!", new DateTime(2025, 5, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), false, 2, "Spongebob", new DateTime(2025, 5, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), "claire_d" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Reviews");
        }
    }
}

using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ReviewAPI.Migrations.UserDb
{
    /// <inheritdoc />
    public partial class ThirdUserDbCreation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "CreatedAt", "Email", "Password", "Username" },
                values: new object[] { 1, new DateTime(2025, 6, 5, 0, 13, 35, 895, DateTimeKind.Utc).AddTicks(9906), "admin@mvonbehren.com", "password", "admin" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}

using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ReviewAPI.Migrations.UserDb
{
    /// <inheritdoc />
    public partial class FourthUserDbCreation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2025, 6, 5, 0, 19, 15, 182, DateTimeKind.Utc).AddTicks(9662));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedAt",
                value: new DateTime(2025, 6, 5, 0, 13, 35, 895, DateTimeKind.Utc).AddTicks(9906));
        }
    }
}

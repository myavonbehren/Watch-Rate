﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ReviewAPI.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
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
                    Content = table.Column<string>(type: "TEXT", maxLength: 1000, nullable: false),
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
                    { 1, "After rewatching the entire series, I have mixed feelings about Friends. While the chemistry between the six main characters is undeniably great and there are genuinely hilarious moments throughout, some of the humor feels dated now. The show perfectly captures that post-college, pre-real-adulthood phase of life that many people can relate to.", new DateTime(2025, 5, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), false, 3, "Friends", new DateTime(2025, 5, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), "mannydelgado" },
                    { 2, "The Sopranos completely changed television forever. James Gandolfini's portrayal of Tony Soprano is masterful - he makes you sympathize with a character who does terrible things. The writing is sophisticated, dealing with themes of family, therapy, and the American Dream. Some episodes drag a bit, but the character development and psychological depth more than make up for it. The finale is still controversial, but I think it was brilliant. A true masterpiece of television.", new DateTime(2025, 6, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), true, 4, "Sopranos", new DateTime(2025, 6, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "mannydelgado" },
                    { 3, "While I can appreciate the colorful animation and the creativity that goes into SpongeBob, it's just not for me. The humor is very childish and repetitive, and SpongeBob's voice gets grating after a while. I understand why kids love it, but as an adult viewer, I find it hard to sit through. The animation quality is decent, but that alone isn't enough to keep me engaged. Patrick's character particularly annoys me.", new DateTime(2025, 5, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), false, 2, "Spongebob", new DateTime(2025, 5, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), "mannydelgado" },
                    { 4, "Absolutely phenomenal from start to finish. Bryan Cranston's transformation from Walter White the mild-mannered teacher to Heisenberg is incredible to watch. Every episode builds tension perfectly, and the cinematography is stunning. The character development is some of the best I've ever seen on television. Jesse's journey is heartbreaking but necessary. This show proves that television can be just as compelling as any movie. Perfect ending too.", new DateTime(2025, 6, 3, 0, 0, 0, 0, DateTimeKind.Unspecified), true, 5, "Breaking Bad", new DateTime(2025, 6, 3, 0, 0, 0, 0, DateTimeKind.Unspecified), "cam_tucker" },
                    { 5, "The Office is comfort food for the soul! Jim and Pam's relationship gives me all the feels, and Steve Carell as Michael Scott is comedy genius. Yes, Michael can be problematic, but that's kind of the point. The mockumentary style works perfectly, and the supporting characters like Dwight and Stanley are hilarious. The later seasons after Steve left weren't quite the same, but the first seven seasons are television gold.", new DateTime(2025, 5, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), true, 4, "The Office", new DateTime(2025, 6, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "cam_tucker" },
                    { 6, "Season 1 was amazing - great 80s nostalgia, awesome kids, and genuinely scary moments with the Demogorgon. But honestly, it's gone downhill since then. They keep making the threats bigger and bigger, and it's getting ridiculous. The kids were great in season 1 but now they're older and the acting feels forced. Still watch it because I'm invested, but it's not the same show anymore.", new DateTime(2025, 6, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), false, 3, "Stranger Things", new DateTime(2025, 6, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "cam_tucker" },
                    { 7, "The cinematography and visuals are absolutely stunning - every shot looks like art. Zendaya's performance is incredible and really shows her range beyond Disney. However, the show can be really intense and triggering at times. Some storylines feel a bit over-the-top, but I think that's intentional. It's definitely not for everyone, but if you can handle the heavy content, it's a beautiful and important show about modern teenage life.", new DateTime(2025, 5, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), true, 4, "Euphoria", new DateTime(2025, 5, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), "phil_dunphy" },
                    { 8, "Rick and Morty is brilliant science fiction disguised as crude humor. The show tackles complex philosophical concepts about existence, free will, and the meaninglessness of life while maintaining incredible comedic timing. Dan Harmon's writing is sharp, and the voice acting is perfect. Some episodes are absolute masterpieces of storytelling. However, the fanbase can be quite toxic, which unfortunately affects how people perceive the show.", new DateTime(2025, 6, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), true, 4, "Rick and Morty", new DateTime(2025, 6, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "phil_dunphy" },
                    { 9, "I wasn't expecting much from a show about soccer (sorry, football), but Ted Lasso completely won me over. Jason Sudeikis brings such warmth and authenticity to the character. The show deals with divorce, mental health, and toxic masculinity in really thoughtful ways. Sure, it can be a bit saccharine at times, but in today's world, we need more kindness and optimism. Made me cry more than I'd like to admit.", new DateTime(2025, 6, 3, 0, 0, 0, 0, DateTimeKind.Unspecified), true, 4, "Ted Lasso", new DateTime(2025, 6, 3, 0, 0, 0, 0, DateTimeKind.Unspecified), "phil_dunphy" }
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

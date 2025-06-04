using ReviewAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ReviewAPI.Data;

public class ReviewDbContext : DbContext
{
    public ReviewDbContext(DbContextOptions<ReviewDbContext> options)
        : base(options)
    {
    }
    
    public DbSet<Review> Reviews { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configure entity properties
        modelBuilder.Entity<Review>()
            .Property(r => r.Title)
            .IsRequired()
            .HasMaxLength(200);
            
        modelBuilder.Entity<Review>()
            .Property(r => r.Content)
            .IsRequired()
            .HasMaxLength(1000);

        // Seed data
        DateTime date = new DateTime(2025, 5, 28);
        modelBuilder.Entity<Review>().HasData(
            new Review { Id = 1, Username = "mannydelgado", Title = "Friends",
                Content = "After rewatching the entire series, I have mixed feelings about Friends. While the chemistry between the six main characters is undeniably great and there are genuinely hilarious moments throughout, some of the humor feels dated now. The show perfectly captures that post-college, pre-real-adulthood phase of life that many people can relate to. Ross and Rachel's on-again, off-again relationship gets exhausting, but episodes like 'The One with the Embryos' and 'The One Where No One's Ready' are comedy gold. It's comfort TV at its finest, even if it's not as progressive as we'd like by today's standards.", 
                Liked = true, Rating = 3, CreatedAt = date, UpdatedAt = date},
            new Review { Id = 2, Username = "cam_tucker", Title = "Sopranos",
                Content = "The Sopranos completely changed television forever. James Gandolfini's portrayal of Tony Soprano is masterful - he makes you sympathize with a character who does terrible things. The writing is sophisticated, dealing with themes of family, therapy, and the American Dream. Some episodes drag a bit, but the character development and psychological depth more than make up for it. The finale is still controversial, but I think it was brilliant. A true masterpiece of television.", 
                Liked = true, Rating = 4, CreatedAt = date, UpdatedAt = date},
            new Review { Id = 3, Username = "mannydelgado", Title = "Spongebob",
                Content = "While I can appreciate the colorful animation and the creativity that goes into SpongeBob, it's just not for me. The humor is very childish and repetitive, and SpongeBob's voice gets grating after a while. I understand why kids love it, but as an adult viewer, I find it hard to sit through. The animation quality is decent, but that alone isn't enough to keep me engaged. Patrick's character particularly annoys me.", 
                Liked = false, Rating = 2, CreatedAt = date, UpdatedAt = date},
            new Review { Id = 4, Username = "phil_dunphy", Title = "Breaking Bad",
                Content = "Absolutely phenomenal from start to finish. Bryan Cranston's transformation from Walter White the mild-mannered teacher to Heisenberg is incredible to watch. Every episode builds tension perfectly, and the cinematography is stunning. The character development is some of the best I've ever seen on television. Jesse's journey is heartbreaking but necessary. This show proves that television can be just as compelling as any movie. Perfect ending too.",
                Liked = true, Rating = 5, CreatedAt = date,UpdatedAt = date},
            new Review { Id = 5, Username = "cam_tucker", Title = "The Office",
                Content = "The Office is comfort food for the soul! Jim and Pam's relationship gives me all the feels, and Steve Carell as Michael Scott is comedy genius. Yes, Michael can be problematic, but that's kind of the point. The mockumentary style works perfectly, and the supporting characters like Dwight and Stanley are hilarious. The later seasons after Steve left weren't quite the same, but the first seven seasons are television gold.",
                Liked = true, Rating = 4, CreatedAt = date, UpdatedAt = date},
            new Review { Id = 6, Username = "mannydelgado", Title = "Stranger Things",
                Content = "Season 1 was amazing - great 80s nostalgia, awesome kids, and genuinely scary moments with the Demogorgon. But honestly, it's gone downhill since then. They keep making the threats bigger and bigger, and it's getting ridiculous. The kids were great in season 1 but now they're older and the acting feels forced. Still watch it because I'm invested, but it's not the same show anymore.",
                Liked = false, Rating = 3, CreatedAt = date, UpdatedAt = date},
            new Review { Id = 7, Username = "phil_dunphy", Title = "Euphoria",
                Content = "The cinematography and visuals are absolutely stunning - every shot looks like art. Zendaya's performance is incredible and really shows her range beyond Disney. However, the show can be really intense and triggering at times. Some storylines feel a bit over-the-top, but I think that's intentional. It's definitely not for everyone, but if you can handle the heavy content, it's a beautiful and important show about modern teenage life.",
                Liked = true, Rating = 4, CreatedAt = date,UpdatedAt = date},
            new Review { Id = 8, Username = "alex_d", Title = "Rick and Morty",
                Content = "Rick and Morty is brilliant science fiction disguised as crude humor. The show tackles complex philosophical concepts about existence, free will, and the meaninglessness of life while maintaining incredible comedic timing. Dan Harmon's writing is sharp, and the voice acting is perfect. Some episodes are absolute masterpieces of storytelling. However, the fanbase can be quite toxic, which unfortunately affects how people perceive the show.",
                Liked = true, Rating = 4, CreatedAt = date, UpdatedAt = date},
            new Review { Id = 9, Username = "cam_tucker", Title = "The Crown",
                Content = "The Crown is beautifully produced with incredible attention to historical detail and stunning cinematography. The performances are generally excellent, particularly Claire Foy as young Elizabeth II. However, as someone who studied history, I sometimes find myself questioning the dramatic liberties taken with real events. It's entertainment, not documentary, but the line gets blurred. Still, it's compelling television that makes you think about power, duty, and sacrifice.",
                Liked = true, Rating = 3, CreatedAt = date, UpdatedAt = date},
            new Review { Id = 10, Username = "phil_dunphy", Title = "Ted Lasso",
                Content = "I wasn't expecting much from a show about soccer (sorry, football), but Ted Lasso completely won me over. Jason Sudeikis brings such warmth and authenticity to the character. The show deals with divorce, mental health, and toxic masculinity in really thoughtful ways. Sure, it can be a bit saccharine at times, but in today's world, we need more kindness and optimism. Made me cry more than I'd like to admit.",
                Liked = true, Rating = 4, CreatedAt = date, UpdatedAt = date}
        );
    }
}
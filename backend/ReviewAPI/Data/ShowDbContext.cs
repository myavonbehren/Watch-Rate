using ShowAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ShowAPI.Data;

public class ShowDbContext : DbContext
{
    public ShowDbContext(DbContextOptions<ShowDbContext> options)
        : base(options)
    {
    }
    
    public DbSet<Show> Shows { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configure entity properties
        modelBuilder.Entity<Show>()
            .Property(r => r.Title)
            .IsRequired()
            .HasMaxLength(200);

        modelBuilder.Entity<Show>()
            .HasOne(r => r.User)
            .WithMany(u => u.Shows)
            .HasForeignKey(r => r.UserId);

        // Seed data
        modelBuilder.Entity<Show>().HasData(
            new Show {Id = 1, Title = "Sopranos", isWatched = false,  Username = "tvshowlover", UserId = 2},
            new Show {Id = 2, Title = "The Office", isWatched = false, Username = "tvshowlover", UserId = 2},
            new Show {Id = 3, Title = "Friends", isWatched = true, Username = "tvshowlover", UserId = 2},
            new Show {Id = 4, Title = "Spongebob", isWatched = true, Username = "tvshowlover", UserId = 2},

            new Show { Id = 5, Title = "Star Trek: The Next Generation", isWatched = false, Username = "criticalviewer", UserId = 3},
            new Show { Id = 6, Title = "Stranger Things", isWatched = false, Username = "criticalviewer", UserId = 3},
            new Show { Id = 7, Title = "Rick and Morty", isWatched = true, Username = "criticalviewer", UserId = 3},
            new Show { Id = 8, Title = "Lost", isWatched = true, Username = "criticalviewer", UserId = 3},

            new Show { Id = 10, Title = "The Office", isWatched = true, Username = "binge_watcher", UserId = 4},
            new Show { Id = 11, Title = "Overcompensating", isWatched = false, Username = "binge_watcher", UserId = 4},
            new Show { Id = 12, Title = "Euphoria", isWatched = false, Username = "binge_watcher", UserId = 4}
        );
    }
}
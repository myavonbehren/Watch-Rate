using ShowAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ReviewAPI.Data;

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
    
        // Seed data
        modelBuilder.Entity<Show>().HasData(
            new Show {Id = 1, Username = "mannydelgado", Title = "Sopranos", isWatched = false},
            new Show {Id = 2, Username = "mannydelgado", Title = "The Office", isWatched = false},
            new Show {Id = 3, Username = "mannydelgado", Title = "Friends", isWatched = true},
            new Show {Id = 4, Username = "mannydelgado", Title = "Spongebob", isWatched = true},

            new Show { Id = 5, Username = "phil_dunphy", Title = "Star Trek: The Next Generation", isWatched = false },
            new Show { Id = 6, Username = "phil_dunphy", Title = "Stranger Things", isWatched = false },
            new Show { Id = 7, Username = "phil_dunphy", Title = "Rick and Morty", isWatched = false },
            new Show { Id = 8, Username = "phil_dunphy", Title = "Lost", isWatched = true },

            new Show { Id = 10, Username = "cam_tucker", Title = "The Crown", isWatched = true },
            new Show { Id = 11, Username = "cam_tucker", Title = "Overcompensating", isWatched = false },
            new Show { Id = 12, Username = "cam_tucker", Title = "Euphoria", isWatched = false }
        );
    }
}
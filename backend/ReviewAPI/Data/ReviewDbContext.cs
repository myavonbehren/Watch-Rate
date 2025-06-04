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
            .HasMaxLength(300);

        // Seed data
        DateTime date = new DateTime(2025, 5, 28);
        modelBuilder.Entity<Review>().HasData(
            new Review {Id = 1, Username = "manny_d", Title = "Friends", Content = "Funny show!", Liked = true, Rating = 3, CreatedAt = date, UpdatedAt = date},
            new Review {Id = 2, Username = "gloria_p", Title = "Sopranos", Content = "Great show!", Liked = true, Rating = 4, CreatedAt = date, UpdatedAt = date},
            new Review {Id = 3, Username = "claire_d", Title = "Spongebob", Content = "Great animation!", Liked = false, Rating = 2, CreatedAt = date, UpdatedAt = date}
        );
    }
}
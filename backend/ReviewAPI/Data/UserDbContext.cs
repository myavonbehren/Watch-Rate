using System;
using UserAPI.Models;
using Microsoft.EntityFrameworkCore;
namespace ReviewAPI.Data;

public class UserDbContext : DbContext
{
    public UserDbContext(DbContextOptions<UserDbContext> options)
        : base(options)
    {
    }

    public UserDbContext()
    {
    }

    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=users.db");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().ToTable("Users");
        modelBuilder.Entity<User>().HasKey(u => u.Id);
        modelBuilder.Entity<User>().Property(u => u.Username).IsRequired().HasMaxLength(100);
        modelBuilder.Entity<User>().Property(u => u.Email).IsRequired().HasMaxLength(100);
        modelBuilder.Entity<User>().Property(u => u.Password).IsRequired().HasMaxLength(100);
        modelBuilder.Entity<User>().Property(u => u.CreatedAt).IsRequired();

        modelBuilder.Entity<User>().HasData(
            new User
            {
                Id = 1,
                Username = "admin",
                Email = "admin@mvonbehren.com",
                Password = "password",
                CreatedAt = DateTime.UtcNow
            },
            new User
            {
                Id = 2,
                Username = "tvshowlover",
                Email = "tvshowlover@example.com",
                Password = "password123",
                CreatedAt = DateTime.UtcNow
            },
            new User
            {
                Id = 3,
                Username = "criticalviewer",
                Email = "criticalviewer@example.com",
                Password = "watchingTV",
                CreatedAt = DateTime.UtcNow
            },
            new User
            {
                Id = 4,
                Username = "binge_watcher",
                Email = "bingewatcher@example.com",
                Password = "binge123",
                CreatedAt = DateTime.UtcNow
            }
            );
    }
}

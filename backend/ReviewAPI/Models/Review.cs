using System;
using UserAPI.Models;

namespace ReviewAPI.Models;

public class Review
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public int Rating { get; set; }
    public Boolean Liked { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public string Username { get; set; } = string.Empty;
    // Foreign key to User table
    public int UserId { get; set; } 
    // Navigation property to User
    public User User { get; set; } = null!; 
}
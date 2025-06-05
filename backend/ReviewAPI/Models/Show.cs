using System;
using UserAPI.Models;

namespace ShowAPI.Models;

public class Show
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public Boolean isWatched { get; set; }
    
    public string Username { get; set; } = string.Empty;
    // Foreign key to User table
    public int UserId { get; set; } 
    // Navigation property to User
    public User User { get; set; } = null!;
}
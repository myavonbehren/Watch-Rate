using System;

namespace ShowAPI.Models;

public class Show
{
    public int Id { get; set; }
    public string Username { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public Boolean isWatched { get; set; }
}
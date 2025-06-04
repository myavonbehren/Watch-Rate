using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using System.Net.Http.Headers;
using System.Text;
using System.Security.Claims;

using ReviewAPI.Models;
using ShowAPI.Models;
using ReviewAPI.Data;
using ShowAPI.Data;
using ReviewAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add CORS support
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Review API", Version = "v1" });
}
);

// Add EF Core to the container
builder.Services.AddDbContext<ReviewDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("SqliteConnection")));

builder.Services.AddDbContext<ShowDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("SqliteConnection")));

// Configure basic authentication
builder.Services.AddAuthentication("BasicAuthentication")
    .AddScheme<AuthenticationSchemeOptions, ReviewApiBasicAuthHandler>("BasicAuthentication", null);

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("BasicAuthentication", policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.RequireClaim(ClaimTypes.NameIdentifier);
    });
});

// Add services
builder.Services.AddScoped<IUserService, UserService>();

var app = builder.Build();

// Ensure database is created with seed data
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ReviewDbContext>();
    dbContext.Database.EnsureCreated();
}

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ShowDbContext>();
    dbContext.Database.EnsureCreated();
}

// Configure middleware
app.UseCors("AllowReactApp");

// Add usage before your existing endpoints
app.UseAuthentication();
app.UseAuthorization();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// REVIEWS

// GET - Get all reviews
app.MapGet("/reviews", async (ReviewDbContext db) => 
    await db.Reviews.ToListAsync())
.WithName("GetAllReviews");

// GET - Get a specific review by ID
app.MapGet("/reviews/{id}", async (int id, ReviewDbContext db) =>
{
    var review = await db.Reviews.FindAsync(id);
    return review == null ? Results.NotFound() : Results.Ok(review);
})
.WithName("GetReviewById");

// POST - Add a new review
app.MapPost("/reviews", async (Review review, ReviewDbContext db) =>
{
    review.CreatedAt = DateTime.UtcNow;
    review.UpdatedAt = DateTime.UtcNow;

    db.Reviews.Add(review);
    
    await db.SaveChangesAsync();
    return Results.Created($"/reviews/{review.Id}", review);
})
.WithName("AddReview");

// PUT - Update a review
app.MapPut("/reviews/{id}", async (int id, Review updatedReview, ReviewDbContext db) =>
{
    var review = await db.Reviews.FindAsync(id);
    if (review == null) return Results.NotFound();

    review.Title = updatedReview.Title;
    review.Content = updatedReview.Content;
    review.Rating = updatedReview.Rating;
    review.Liked = updatedReview.Liked;
    review.UpdatedAt = DateTime.UtcNow;

    await db.SaveChangesAsync();
    return Results.NoContent();
})
.WithName("UpdateReview");

// DELETE - Delete a review
app.MapDelete("/reviews/{id}", async (int id, ReviewDbContext db) =>
{
    var review = await db.Reviews.FindAsync(id);
    if (review == null) return Results.NotFound();

    db.Reviews.Remove(review);
    await db.SaveChangesAsync();
    return Results.NoContent();
})
.WithName("DeleteReview");

// SHOWS

// GET - Get all shows
app.MapGet("/shows", async (ShowDbContext db) =>
    await db.Shows.ToListAsync())
.WithName("GetAllShows").RequireAuthorization();


// GET - Get a specific show by ID
app.MapGet("/shows/{id}", async (int id, ShowDbContext db) =>
{
    var show = await db.Shows.FindAsync(id);
    return show == null ? Results.NotFound() : Results.Ok(show);
})
.WithName("GetShowById");

// POST - Add a new show
app.MapPost("/shows", async (Show show, ShowDbContext db) =>
{
    db.Shows.Add(show);

    await db.SaveChangesAsync();
    return Results.Created($"/shows/{show.Id}", show);
})
.WithName("AddShow");

// PATCH - Update isWatched
app.MapPatch("/shows/{id}/watched", async (int id, bool isWatched, ShowDbContext db) =>
{
    var show = await db.Shows.FindAsync(id);
    if (show == null) return Results.NotFound();
    
    show.isWatched = isWatched;
    await db.SaveChangesAsync();
    return Results.NoContent();
})
.WithName("UpdateWatched");

// DELETE - Delete a show
app.MapDelete("/shows/{id}", async (int id, ShowDbContext db) =>
{
    var show = await db.Shows.FindAsync(id);
    if (show == null) return Results.NotFound();

    db.Shows.Remove(show);
    await db.SaveChangesAsync();
    return Results.NoContent();
})
.WithName("DeleteShow");

// Add a protected route
app.MapGet("/api/protected-reviws", (ClaimsPrincipal user) =>
{
    // Return the authenticated user's name or a simple message
    return Results.Ok(new { message = $"Hello, {user.Identity?.Name ?? "authenticated user"}! This is a protected endpoint." });
})
.WithName("GetProtectedReviews")
.RequireAuthorization();

app.Run();
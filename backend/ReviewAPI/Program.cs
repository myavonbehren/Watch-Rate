using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using ReviewAPI.Models;
using ReviewAPI.Data;

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

var app = builder.Build();

// Ensure database is created with seed data
using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<ReviewDbContext>();
    dbContext.Database.EnsureCreated();
}

// Configure middleware
app.UseCors("AllowReactApp");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

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


app.Run();
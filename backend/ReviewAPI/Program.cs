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

// Configure middleware
app.UseCors("AllowReactApp");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//In-memory database for testing purposes
DateTime date = new DateTime(2025, 5, 28);
var reviews = new List<Review>
{
    new Review {Id = 1, Username = "Manny", Title = "Friends", Content = "Funny show!", Liked = true, Rating = 3, CreatedAt = date, UpdatedAt = date},
    new Review {Id = 2, Username = "Gloria", Title = "Sopranos", Content = "Great show!", Liked = true, Rating = 4, CreatedAt = date, UpdatedAt = date},
    new Review {Id = 3, Username = "Claire", Title = "Spongebob", Content = "Great animation!", Liked = false, Rating = 2, CreatedAt = date, UpdatedAt = date},
};


app.MapGet("/reviews", () => reviews)
    .WithName("GetAllReviews");

// GET - Get a specific review by ID
app.MapGet("/reviews/{id}", (int id) =>
{
    var review = reviews.Find(b => b.Id == id);
    return review == null ? Results.NotFound() : Results.Ok(review);
})
.WithName("GetReviewById");

// POST - Add a new review
app.MapPost("/reviews", (Review review) =>
{
    review.Id = reviews.Count > 0 ? reviews.Max(b => b.Id) + 1 : 1;
    reviews.Add(review);
    return Results.Created($"/reviews/{review.Id}", review);
})
.WithName("AddReview");

// PUT - Update a review
app.MapPut("/reviews/{id}", (int id, Review updatedreview) =>
{
    var index = reviews.FindIndex(b => b.Id == id);
    if (index == -1) return Results.NotFound();
    
    updatedreview.Id = id;
    reviews[index] = updatedreview;
    return Results.NoContent();
})
.WithName("UpdateReview");

// DELETE - Delete a review
app.MapDelete("/reviews/{id}", (int id) =>
{
    var index = reviews.FindIndex(b => b.Id == id);
    if (index == -1) return Results.NotFound();
    
    reviews.RemoveAt(index);
    return Results.NoContent();
})
.WithName("DeleteReview");


app.Run();
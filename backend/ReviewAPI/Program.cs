using Microsoft.OpenApi.Models;
using ReviewAPI.Models;

var builder = WebApplication.CreateBuilder(args);

// Add CORS support
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:5173") // Vite's default port
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


app.Run();
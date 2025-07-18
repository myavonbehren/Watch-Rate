using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;

using ReviewAPI.Models;
using ShowAPI.Models;
using ReviewAPI.Data;
using ShowAPI.Data;
using ReviewAPI.Services;
using UserAPI.Models;
using Microsoft.VisualBasic;

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

// Add JWT authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = "ReviewAPI",
        ValidAudience = "ReviewUsers",
        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes("YourSuperSecretKeyForReviewApiThatIsLongEnough"))
    };
});

// Add EF Core to the container
builder.Services.AddDbContext<ReviewDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("SqliteConnection")));

builder.Services.AddDbContext<ShowDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("SqliteConnection")));

builder.Services.AddDbContext<UserDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("UserDbConnection")));

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
builder.Services.AddAuthorization();


var app = builder.Build();

// Ensure database is created with seed data
using (var scope = app.Services.CreateScope())
{
    var userDbContext = scope.ServiceProvider.GetRequiredService<UserDbContext>();
    userDbContext.Database.EnsureCreated();

    var reviewDbContext = scope.ServiceProvider.GetRequiredService<ReviewDbContext>();
    reviewDbContext.Database.EnsureCreated();

    var showDbContext = scope.ServiceProvider.GetRequiredService<ShowDbContext>();
    showDbContext.Database.EnsureCreated();
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
app.MapPost("/reviews", async (Review review, HttpContext context, ReviewDbContext db) =>
{
    var userId = int.Parse(context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "0");
    var username = context.User.FindFirst("username")?.Value ?? "";

    review.UserId = userId;
    review.Username = username;
    review.CreatedAt = DateTime.UtcNow;
    review.UpdatedAt = DateTime.UtcNow;

    db.Reviews.Add(review);
    
    await db.SaveChangesAsync();
    return Results.Created($"/reviews/{review.Id}", review);
})
.WithName("AddReview").RequireAuthorization();

// PUT - Update a review
app.MapPut("/reviews/{id}", async (int id, Review updatedReview, HttpContext context, ReviewDbContext db) =>
{
    var userId = int.Parse(context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "0");
    var review = await db.Reviews.FirstOrDefaultAsync(r => r.Id == id && r.UserId == userId);

    //var review = await db.Reviews.FindAsync(id);
    if (review == null) return Results.NotFound();

    review.Title = updatedReview.Title;
    review.Content = updatedReview.Content;
    review.Rating = updatedReview.Rating;
    review.Liked = updatedReview.Liked;
    review.UpdatedAt = DateTime.UtcNow;

    await db.SaveChangesAsync();
    return Results.NoContent();
})
.WithName("UpdateReview").RequireAuthorization();

// DELETE - Delete a review
app.MapDelete("/reviews/{id}", async (int id, HttpContext context, ReviewDbContext db) =>
{
    var userId = int.Parse(context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "0");
    var review = await db.Reviews.FirstOrDefaultAsync(r => r.Id == id && r.UserId == userId);
    
    if (review == null) return Results.NotFound();

    db.Reviews.Remove(review);
    await db.SaveChangesAsync();
    return Results.NoContent();
})
.WithName("DeleteReview").RequireAuthorization();;

// SHOWS
app.MapGet("/shows", async (HttpContext context, ShowDbContext db) =>
{
    var userId = int.Parse(context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "0");
    return await db.Shows.Where(s => s.UserId == userId).ToListAsync();
})
.WithName("GetUserShows").RequireAuthorization();

// GET - Get a specific show by ID
app.MapGet("/shows/{id}", async (int id, ShowDbContext db) =>
{
    var show = await db.Shows.FindAsync(id);
    return show == null ? Results.NotFound() : Results.Ok(show);
})
.WithName("GetShowById");

// POST - Add a new show
app.MapPost("/shows", async (Show show, HttpContext context, ShowDbContext db) =>
{
    var userId = int.Parse(context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "0");
    var username = context.User.FindFirst("username")?.Value ?? "";

    show.UserId = userId;
    show.Username = username;

    db.Shows.Add(show);

    await db.SaveChangesAsync();
    return Results.Created($"/shows/{show.Id}", show);
})
.WithName("AddShow").RequireAuthorization();

// PATCH - Update isWatched
app.MapPatch("/shows/{id}/watched", async (int id, bool isWatched, HttpContext context, ShowDbContext db) =>
{
    var userId = int.Parse(context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "0");
    var show = await db.Shows.FirstOrDefaultAsync(s => s.Id == id && s.UserId == userId);

    //var show = await db.Shows.FindAsync(id);
    if (show == null) return Results.NotFound();
    
    show.isWatched = isWatched;
    await db.SaveChangesAsync();
    return Results.NoContent();
})
.WithName("UpdateWatched").RequireAuthorization();

// DELETE - Delete a show
app.MapDelete("/shows/{id}", async (int id, HttpContext context, ShowDbContext db) =>
{
    var userId = int.Parse(context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "0");
    var show = await db.Shows.FirstOrDefaultAsync(s => s.Id == id && s.UserId == userId);

    //var show = await db.Shows.FindAsync(id);
    if (show == null) return Results.NotFound();

    db.Shows.Remove(show);
    await db.SaveChangesAsync();
    return Results.NoContent();
})
.WithName("DeleteShow");

// USERS
// New User Registration API
app.MapPost("/register", async (User user, UserDbContext udb) =>
{
    // Check if the user already exists
    var existingUser = await udb.Users.FirstOrDefaultAsync(u => u.Email == user.Email);
    if (existingUser != null)
    {
        return Results.BadRequest("User already exists.");
    }

    // Add the new user to the database
    udb.Users.Add(user);
    await udb.SaveChangesAsync();
    return Results.Created($"/users/{user.Id}", user);
});

// Auth endpoints
app.MapPost("/login", async (LoginRequest request, UserDbContext udb) =>
{
    var user = await udb.Users.FirstOrDefaultAsync(u => u.Email == request.Email);

    if (user == null) 
        return Results.Unauthorized();
        
    var expectedEncodedPassword = Convert.ToBase64String(Encoding.UTF8.GetBytes($"{request.Email}:{request.Password}"));

    // Check if the password matches the expected encoded password
    // Checks hash password and seed plain password
    if (user.Password != expectedEncodedPassword && user.Password != request.Password)
        return Results.Unauthorized();
    
    // Demo implementation - in a real app, verify against database
    // if (request.Email != "admin@example.com" || request.Password != "password")
    //     return Results.Unauthorized();

    var tokenHandler = new JwtSecurityTokenHandler();
    var key = Encoding.UTF8.GetBytes("YourSuperSecretKeyForReviewApiThatIsLongEnough");
    
    var tokenDescriptor = new SecurityTokenDescriptor
    {
        Subject = new ClaimsIdentity(new[]
        {
            new Claim(ClaimTypes.Name, user.Email),
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim("username", user.Username ?? ""),
            new Claim(ClaimTypes.Role, "User"),

        }),
        Expires = DateTime.UtcNow.AddHours(1),
        Issuer = "ReviewAPI",
        Audience = "ReviewUsers",
        SigningCredentials = new SigningCredentials(
            new SymmetricSecurityKey(key), 
            SecurityAlgorithms.HmacSha256Signature)
    };
    
    var token = tokenHandler.CreateToken(tokenDescriptor);
    
    return Results.Ok(new
    {
        accessToken = tokenHandler.WriteToken(token),
        refreshToken = Convert.ToBase64String(Guid.NewGuid().ToByteArray())
    });
});

app.Run();
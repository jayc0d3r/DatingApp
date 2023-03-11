using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
//builder.Services.AddEndpointsApiExplorer(); -r
//builder.Services.AddSwaggerGen(); -r
builder.Services.AddDbContext<DataContext>(opt => 
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment()) -r
// {
//     app.UseSwagger(); -r
//     app.UseSwaggerUI(); -r
// }

//app.UseHttpsRedirection(); -r

//app.UseAuthorization(); -r

app.MapControllers();

app.Run();

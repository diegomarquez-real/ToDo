using ToDo.Business;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddAutoMapper(typeof(ToDo.Business.Mapping.TaskMappingProfile));
builder.Services.AddBusinessLayer(c =>
{
    c.SqlLiteConnectionString =  $"Data Source={Path.Combine(Directory.GetParent(builder.Environment.ContentRootPath)!.GetDirectories("ToDo.Database").FirstOrDefault()!.FullName, builder.Configuration.GetConnectionString("SqlLiteConnection")!)}";
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Task}/{action=Index}/{id?}");

app.Run();

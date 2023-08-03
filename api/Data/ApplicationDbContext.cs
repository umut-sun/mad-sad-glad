using MadSadGladApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace MadSadGladApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Feedback> Feedbacks { get; set; }
    }
}

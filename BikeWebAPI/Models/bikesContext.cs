using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BikeWebAPI.Models
{
    public partial class bikesContext : DbContext
    {
        public bikesContext()
        {
        }

        public bikesContext(DbContextOptions<bikesContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Bike> Bikes { get; set; } = null!;
        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<Gear> Gears { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySQL("server=localhost;database=bikes;user=root;password=;ssl mode=none;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Bike>(entity =>
            {
                entity.ToTable("bikes");

                entity.HasIndex(e => new { e.CategoryId, e.GearId }, "category_id");

                entity.HasIndex(e => e.GearId, "gear_id");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.Break)
                    .HasMaxLength(30)
                    .HasColumnName("break");

                entity.Property(e => e.CategoryId)
                    .HasColumnType("int(11)")
                    .HasColumnName("category_id");

                entity.Property(e => e.GearId)
                    .HasColumnType("int(11)")
                    .HasColumnName("gear_id");

                entity.Property(e => e.Img)
                    .HasMaxLength(255)
                    .HasColumnName("img");

                entity.Property(e => e.Name)
                    .HasMaxLength(40)
                    .HasColumnName("name");

                entity.Property(e => e.Size)
                    .HasColumnType("int(3)")
                    .HasColumnName("size");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Bikes)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("bikes_ibfk_1");

                entity.HasOne(d => d.Gear)
                    .WithMany(p => p.Bikes)
                    .HasForeignKey(d => d.GearId)
                    .HasConstraintName("bikes_ibfk_2");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("category");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.CategoryName)
                    .HasMaxLength(40)
                    .HasColumnName("category_name");
            });

            modelBuilder.Entity<Gear>(entity =>
            {
                entity.ToTable("gear");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.GearName)
                    .HasMaxLength(40)
                    .HasColumnName("gear_name");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

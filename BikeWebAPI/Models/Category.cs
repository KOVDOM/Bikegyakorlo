using System;
using System.Collections.Generic;

namespace BikeWebAPI.Models
{
    public partial class Category
    {
        public Category()
        {
            Bikes = new HashSet<Bike>();
        }

        public int Id { get; set; }
        public string CategoryName { get; set; } = null!;

        public virtual ICollection<Bike> Bikes { get; set; }
    }
}

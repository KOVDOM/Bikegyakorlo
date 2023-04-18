using System;
using System.Collections.Generic;

namespace BikeWebAPI.Models
{
    public partial class Gear
    {
        public Gear()
        {
            Bikes = new HashSet<Bike>();
        }

        public int Id { get; set; }
        public string GearName { get; set; } = null!;

        public virtual ICollection<Bike> Bikes { get; set; }
    }
}

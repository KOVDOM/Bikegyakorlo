using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace BikeWebAPI.Models
{
    public partial class Bike
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Img { get; set; } = null!;
        public int CategoryId { get; set; }
        public int GearId { get; set; }
        public string Break { get; set; } = null!;
        public int Size { get; set; }
        [JsonIgnore]
        public virtual Category Category { get; set; } = null!;
        [JsonIgnore]
        public virtual Gear Gear { get; set; } = null!;
    }
}

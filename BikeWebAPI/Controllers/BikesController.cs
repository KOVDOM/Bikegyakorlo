using BikeWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BikeWebAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BikesController : ControllerBase
    {
        [HttpGet("GetAllBikes")]
        public async Task<IEnumerable<object>> GetAllBikes()
        {
            using (var context=new bikesContext())
            {
                 var result = from bikes in context.Bikes join gear in context.Gears on bikes.GearId equals gear.Id join category in context.Categories on bikes.CategoryId equals category.Id select new { bikes.Id,bikes.Name,bikes.Img,bikes.Break,category.CategoryName,gear.GearName,bikes.Size };
                try
                {
                    return await result.ToListAsync();
                }
                catch (Exception ex)
                {
                    return (IEnumerable<object>)BadRequest(ex.Message);
                }
            }
        }

        [HttpGet("GetBike/{id}")]
        public async Task<IEnumerable<object>> GetBike(int id)
        {
            using (var context = new bikesContext())
            {
                var result = from bikes in context.Bikes join gear in context.Gears on bikes.GearId equals gear.Id join category in context.Categories on bikes.CategoryId equals category.Id where bikes.Id==id select new { bikes.Id, bikes.Name, bikes.Img, bikes.Break, category.CategoryName, gear.GearName, bikes.Size };
                try
                {
                    return await result.ToListAsync();
                }
                catch (Exception ex)
                {
                    return (IEnumerable<object>)BadRequest(ex.Message);
                }
            }
        }


        [HttpGet("GetAllBikesByCat/{cat}")]
        public async Task<IEnumerable<object>> GetAllBikesByCat(string cat)
        {
            using (var context = new bikesContext())
            {
                var result = from bikes in context.Bikes join gear in context.Gears on bikes.GearId equals gear.Id join category in context.Categories on bikes.CategoryId equals category.Id where category.CategoryName==cat select new { bikes.Id, bikes.Name, bikes.Img, bikes.Break, category.CategoryName, gear.GearName, bikes.Size };
                try
                {
                    return await result.ToListAsync();
                }
                catch (Exception ex)
                {
                    return (IEnumerable<object>)BadRequest(ex.Message);
                }
            }
        }

        [HttpPost("PostBike")]
        public IActionResult PostBike([FromBody] Bike bike)
        {
            using(var context = new bikesContext())
            {
                try
                {
                    context.Bikes.Add(bike);
                    context.SaveChanges();
                    return StatusCode(201, "Új adat felvitele sikeresen megtörtént!");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }

        [HttpPut("PutBike/{id}")]
        public IActionResult PutBike([FromBody] Bike bike,int id)
        {
            using(var context = new bikesContext())
            {
                try
                {
                    bike.Id = id;
                    context.Bikes.Update(bike);
                    context.SaveChanges();
                    return StatusCode(201, "Adat modosítása sikeresen megtörtént!");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }

        [HttpDelete("DeleteBike/{id}")]
        public IActionResult DeleteBike(int id)
        {
            using (var context = new bikesContext())
            {
                try
                {
                    Bike bike = new Bike();
                    bike.Id= id;
                    context.Bikes.Remove(bike);
                    context.SaveChanges();
                    return StatusCode(201, "Adat törlése sikeresen megtörtént!");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }
    }
}

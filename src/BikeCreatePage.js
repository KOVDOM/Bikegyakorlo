import { useNavigate } from 'react-router-dom';

export function BikeCreatePage(){
    const navigate=useNavigate();
    return(
        <div className='p-5 content bg-whitesmoke text-center'>
            <h2>Új kerékpár</h2>
            <form onSubmit={(event) =>{
                event.persist();
                event.preventDefault();
                fetch(`https://localhost:7287/Bikes/PostBike`, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json',
                    },

                    body: JSON.stringify({
                        name: event.target.elements.name.value,
                        img: event.target.elements.img.value,
                        categoryId: event.target.elements.category.value,
                        gearId: event.target.elements.gear.value,
                        break: event.target.elements.break.value,
                        size: event.target.elements.size.value,
                    }),
                })
                .then(()=>{
                    navigate("/");
                })
            }}>
                <div className='from-group row pb-3'>
                    <label className='col-sm-3 col-form-label'>Kerékpár neve: </label>
                    <div className='col-sm-9'>
                        <input type={"text"} name="name" className='form-control'/>
                        </div>
                </div>
                <div className='from-group row pb-3'>
                    <label className='col-sm-3 col-form-label'>Kép: </label>
                    <div className='col-sm-9'>
                        <input type={"text"} name="img" className='form-control'/>
                        </div>
                </div>
                <div className='from-group row pb-3'>
                    <label className='col-sm-3 col-form-label'>Kategória: </label>
                    <div className='col-sm-9'>
                        <select  name="category" className='form-control'>
                            <option value="1">Országúti kerékpár</option>
                            <option value="2">Mountainbike kerékpár</option>
                            <option value="3">Gravel kerékpár</option>
                            <option value="4">Trekking kerékpár</option>
                            <option value="5">BMX kerékpár</option>
                            <option value="6">Kemping kerékpár</option>
                            <option value="7">Gyerek kerékpár</option>
                        </select>
                        </div>
                </div>
                
                <div className='from-group row pb-3'>
                    <label className='col-sm-3 col-form-label'>Hajtás: </label>
                    <div className='col-sm-9'>
                        <select  name="gear" className='form-control'>
                            <option value="1">Shimano</option>
                            <option value="2">SORA</option>
                            <option value="3">Sram</option>
                            <option value="4">Companolo</option>
                        </select>
                        </div>
                </div>
                <div className='from-group row pb-3'>
                <label className='col-sm-3 col-form-label'>Fék: </label>
                <div className="col-sm-9 d-flex flex-column align-items-start">
                    <div><input type="radio" name="break" value="Tárcsa fék" />&nbsp;&nbsp;<label htmlFor="Tárcsa fék">Tárcsa fék</label></div>
                    <div><input type="radio" name="break" value="Hagyományos fék" />&nbsp;&nbsp;<label htmlFor="Hagyományos fék">Hagyományos fék</label></div>              
                    </div>
                </div>
                <div className='from-group row pb-3'>
                    <label className='col-sm-3 col-form-label'>Méret: </label>
                    <div className='col-sm-9'>
                        <input type={"text"} name="size" className='form-control'/>
                    </div>
                </div>
                <button type='submit' className='btn btn-success'>
                    Küldés
                </button>
            </form>
        </div>
    );
}

export default BikeCreatePage;
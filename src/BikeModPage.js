import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function BikeModPage(props){
    const params=useParams();
    const id=params.bikeId;
    const navigate=useNavigate();
    const [bike, setBike] = useState([]);
    const [modname,setModname] = useState('');
    const [modcat,setModcat] = useState('');
    const [modgear,setModgear]=useState('');
    const [modbreak,setModbreak] = useState('');
    const [modimg,setModimg] = useState('');
    const [modsize,setModsize] = useState('');
    const [isPending,setPending] = useState(false);
    useEffect(() => {
        (async() =>{
        try{
            const res=await fetch(`https://localhost:7287/Bikes/GetBike/${id}`)
            const bikes=await res.json();
            setBike(bikes);
            setModname(bikes.name);
            console.log(modname);
            setModcat(bikes.categoryId);
            console.log(modcat);
            setModgear(bikes.gearId);
            console.log(modgear);
            setModbreak(bikes.break);
            console.log(modbreak);
            setModimg(bikes.img);
            console.log(modimg);
            setModsize(bikes.size);
            console.log(modsize);
        }
        catch(error){
            console.log(error);
        }
    })
    ();
    }, [id,modname,modcat,modgear,modbreak,modimg]);
    const modName=event=>{
        setModname(event.target.value);
    }
    const modCat=event=>{
        setModcat(event.target.value);
    }
    const modGear=event=>{
        setModgear(event.target.value);
    }
    const modBreak=event=>{
        setModbreak(event.target.value);
    }
    const modImg=event=>{
        setModimg(event.target.value);
    }
    const modSize=event=>{
        setModsize(event.target.value);
    }
    return(
        <div className='p-5 content bg-whitesmoke text-center'>
            <h2>Kerékpár adatianak modosítása</h2>
            <form onSubmit={(event) =>{
                event.persist();
                event.preventDefault();
                fetch(`https://localhost:7287/Bikes/PutBike/${id}`, {
                    method: "PUT",
                    headers: {
                        'Content-type': 'application/json',
                    },

                    body: JSON.stringify({
                        id: event.target.elements.id.value,
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
            <div className="p-5 m-auto text-center content bg-lavender">
                {isPending ? (
                    <div className="spinner-border"></div>
                ) : (
                <div>
                {Object.values(bike).map((bike, index)=>(
                <div key={index}>
                    <div className='from-group row pb-3'>
                        <label className='col-sm-3 col-form-label'>Id: </label>
                        <div className='col-sm-9'>
                            <input type={"number"} name="id" className='form-control' defaultValue={bike.id} />
                        </div>
                    </div>
                    <div className='from-group row pb-3'>
                            <label className='col-sm-3 col-form-label'>Kerékpár neve: </label>
                            <div className='col-sm-9'>
                                <input type={"text"} name="name" className='form-control' defaultValue={bike.name} onChange={modName} />
                            </div>
                        </div>
                        <div className='from-group row pb-3'>
                            <label className='col-sm-3 col-form-label'>Kép: </label>
                            <div className='col-sm-9'>
                                <input type={"text"} name="img" className='form-control' defaultValue={bike.img} onChange={modImg} />
                            </div>
                        </div>
                        <div className='from-group row pb-3'>
                            <label className='col-sm-3 col-form-label'>Kategória: </label>
                            <div className='col-sm-9'>
                                <select name="category" className='form-control' defaultValue={bike.categoryId} onChange={modCat}>
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
                                <select name="gear" className='form-control' defaultValue={bike.gearId} onChange={modGear}>
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
                                <select name="break" className='form-control' defaultValue={bike.break} onChange={modBreak}>
                                    <option value="Tárcsa fék">Tárcsa fék</option>
                                    <option value="Hagyományos fék">Hagyományos fék</option>
                                </select>
                            </div>
                        </div>
                        <div className='from-group row pb-3'>
                            <label className='col-sm-3 col-form-label'>Méret: </label>
                            <div className='col-sm-9'>
                                <input type={"number"} name="size" className='form-control' defaultValue={bike.size} onChange={modSize} />
                            </div>
                        </div>
                        <button type='submit' className='btn btn-success'>
                            Küldés
                        </button>
                        </div>
                    ))}
                </div>
                )}
                </div>
            </form>
        </div>            
    );
}

export default BikeModPage;
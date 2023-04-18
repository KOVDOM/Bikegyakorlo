import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

export function BikeSinglePage(props){
    const params = useParams();
    const id=params.bikeId;
    const [bike,setBike] = useState([]);
    const [isPending,setPending] = useState(false);
    useEffect(() => {
        setPending(true);
        (async()=>{
            try{
                const res = await fetch(`https://localhost:7287/Bikes/GetBike/${id}`)
                    const bike = await res.json();
                    setBike(bike);
                    console.log(bike);
            }
            catch(error){
                console.log(error);
            }
            finally{
                setPending(false);
            }
        })
        ();
    }, [id]);

    return(
        <div className="p-5 m-auto text-center content bg-lavender">
            {isPending ? (
                <div className="spinner-border"></div>
            ) : (                
                <div>
                        {Object.values(bike).map((bike, index)=>(
                            <div key={index} className="card body">
                            <p className="text-dark"><b>Név: </b>{bike.name}</p>
                            <p className="text-dark"><b>Kategória: </b>{bike.categoryName}</p>
                            <p className="text-dark"><b>Fék: </b>{bike.break}</p>
                            <p className="text-dark"><b>Hajtás: </b>{bike.gearName}</p>
                            <p className="text-dark"><b>Méret: </b>{bike.size}</p>
                            <div className="card-body">
                            <NavLink key={bike.id} to={"/bike/" + bike.id}>
                                <img alt={bike.name}
                                className="img-fluid"
                                style={{maxHeight: 500}}
                                src={"../"+bike.img ? "../"+bike.img : 
                                "https://via.placeholder.com/400x800"} 
                                />
                                </NavLink>
                                <br/>
                                <br/>
                                <NavLink to={"/"}>
                                <button type="button" className="btn btn-success"><i className="bi bi-backspace-fill"></i></button></NavLink> &nbsp;&nbsp;
                                <NavLink to={"/mod-bike/"+bike.id}>
                                <button type="button" className="btn btn-warning"><i className="bi bi-pen-fill"></i></button></NavLink> &nbsp;&nbsp;
                                <NavLink to={"/del-bike/"+bike.id}>
                                <button type="button" className="btn btn-danger"><i className="bi bi-trash3-fill"></i></button></NavLink>
                            </div>
                            </div>
                        ))}
                    </div>
            )}
        </div>
    );
}

export default BikeSinglePage;
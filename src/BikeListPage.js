import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

export function BikeListPage(){
    const [bikes,setBikes] = useState([]);
    const [isFetchPending,setFetchPending] =useState(false);
    useEffect(() => {
        setFetchPending(true);
        fetch("https://localhost:7287/Bikes/GetAllBikes")
        .then((res) => res.json())
        .then((bike) => setBikes(bike))
        .catch(console.log)
        .finally(() => {
            setFetchPending(false);
        });
    }, []);

    return(
        <div className='container mt-3'>
            <div className='p-5 m-auto text-center content bo-ivory'>
                {isFetchPending ? (
                    <div className='spinner-border'></div>
                ) : (
                    <div>
                        {bikes.map((bike, index)=>(
                            <div key={index} className="card col-sm-3 d-inline-block m-1 p-2">
                            <p className="text-dark"><b>Név: </b>{bike.name}</p>
                            <p className="text-dark"><b>Kategória: </b>{bike.categoryName}</p>
                            <p className="text-dark"><b>Fék: </b>{bike.break}</p>
                            <p className="text-dark"><b>Hajtás: </b>{bike.gearName}</p>
                            <p className="text-dark"><b>Méret: </b>{bike.size}</p>
                            <div className="card-body">
                            <NavLink key={bike.id} to={"/bike/" + bike.id}>
                                <img alt={bike.name}
                                className="img-fluid"
                                style={{maxHeight: 200}}
                                src={"../"+bike.img ? "../"+bike.img : 
                                "https://via.placeholder.com/400x800"} 
                                />
                                </NavLink>
                                <br/>
                                <br/>
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
        </div>
    )
}

export default BikeListPage;
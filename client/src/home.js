import React, { useState } from "react";
import datas from './json/homePage.json';
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

export function Home() {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [priceRange, setpriceRange] = useState("");

    const filtered = () => {
        return datas.filter((product) => {
            const price = parseFloat(product.salePrice);
            if (
                (!minPrice || price >= parseFloat(minPrice)) && (!maxPrice || price <= parseFloat(maxPrice))
            ) {
                if (
                    !priceRange ||
                    priceRange === "all" ||
                    (priceRange === "1-50" && price <= 50) ||
                    (priceRange === "51-100" && price > 50 && price <= 100) ||
                    (priceRange === "101-200" && price > 100 && price <= 200) ||
                    (priceRange === "201-500" && price > 200 && price <= 500)
                ) {
                    return true;
                }
            }
            return false;
        });
    };



    const filter = filtered();

    const handlePriceRange = (event) => {
        setpriceRange(event.target.value);
    };

    return (
        <div>
            <div className="container mt-4">                   
             <Link to ={`/register`}className="btn logout btn-primary" >Logout</Link>
                <div className="row">
                    <div className="col-md-3">
                    <h4 className="text-danger p-2"><Typewriter options={{ strings: ['Price Range Filter'], autoStart: true, loop: true, }} /></h4>
                        <div className="mb-3">
                            <label className="form-label">Minimum Price:</label>
                            <input type="number" className="form-control" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Maximum Price:</label>
                            <input type="number" className="form-control" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                        </div>
                        <label className="form-label">Select Price Range:</label>
                        <select className="form-select" value={priceRange} onChange={handlePriceRange}>
                            <option value="all">All</option>
                            <option value="1-50">1 - 50</option>
                            <option value="51-100">51 - 100</option>
                            <option value="101-200">101 - 200</option>
                            <option value="201-500">201 - 500</option>
                        </select>
                        <button className="btn btn-primary mt-3" onClick={() => filtered()} > Apply Filter </button>
                    </div>
                    {filter.map((product) => (
                        <div className="col-md-4 mb-4" key={product.objectID}>
                            <div className="card">
                                <img src={product.image} className="card-img-top" alt={product.name} style={{ maxWidth: "50vw", maxHeight: "30vh" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text"> {product.shortDescription} </p>
                                    <p className="card-text"> Price: ₹{product.salePrice} </p>
                                    <p className="card-text"> Manufacturer: {product.manufacturer} </p>
                                    <p className="card-text"> Rating Count: {product.customerReviewCount} </p>
                                    <p className="card-text"> Shipping: {product.shipping} </p>
                                    <Link to ={`/booking`}className="btn btn-primary" >Book Now</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

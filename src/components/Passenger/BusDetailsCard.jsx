import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const BusDetailsCard = ({ singleBusDetails }) => {
    return (
        <>
            <div className="m-2 p-3 object-center w-11/12 h-40 flex border border-gray-400 text-lg text-gray-500">
                <div className="w-40">
                    <h1 className="text-2xl font-black font-bold">{singleBusDetails.operator}</h1>
                    <p>{singleBusDetails.ac?"A/C":"Non A/C"}</p>
                    <p>{singleBusDetails.vehicleClass}</p>
                </div>
                <div className="w-40">
                    <h1 className="text-2xl font-black font-bold">{singleBusDetails.departureTime}</h1>
                    <p className="mt-1">{singleBusDetails.departureDate}</p>
                    <p>{singleBusDetails.source}</p>
                </div>
                <div className="w-40">
                    <p>24 hours</p>
                    <ul className="mt-2 text-sm">
                        {singleBusDetails.stops?.map((val,i) => (
                            <li key = {i}>
                                {val}
                            </li>

                        ))}
                    </ul>

                </div>
                <div className="w-40">
                    <h1 className="text-2xl font-black font-bold">{singleBusDetails.arrivalTime}</h1>
                    <p className="mt-1">{singleBusDetails.arrivalDate}</p>
                    <p>{singleBusDetails.destination}</p>
                </div>
                <div className="w-24">
                    <h1>Rating</h1>
                    <p className="mt-2">{singleBusDetails.rating}</p>
                </div>
                <div className="w-40">
                    <p>Starting price</p>
                    <h1 className="text-2xl font-black font-bold mt-2">INR {singleBusDetails.fare}</h1>
                </div>
                <div className="w-32">
                    <h1 className="text-2xl font-black font-bold">Seats available</h1>
                    <p>{singleBusDetails.availablity}</p>
                    <Link to="/seatSelect" className="mt-4 btn btn-sm">
                        View Seats
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BusDetailsCard;
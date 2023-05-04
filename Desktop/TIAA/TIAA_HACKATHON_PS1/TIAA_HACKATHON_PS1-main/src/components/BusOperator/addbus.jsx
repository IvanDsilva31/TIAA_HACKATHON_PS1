import React, { useState } from "react";
import { XIcon, PlusIcon } from '@heroicons/react/outline';
import axios from "axios";

function BusDetailsForm() {
    const [busDetails, setBusDetails] = useState({
        // id: "",
        registrationNumber:"",
        vehicleMake: "",
        vehicleModel: "",
        manufacturingYear:0,
        seating: {
            capacity: 0,
            dim: {
                row: {
                    left: 0,
                    right:0
                }
            }
        },
        ac: false,
        fare: 0,
        features: [],
        colour:"",
    });

    const [featuresList, setFeaturesList] = useState([]);
    const [newFeature, setNewFeature] = useState("");

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        setBusDetails({
            ...busDetails,
            [name]: value
        });
    };

    const handleFeatureInputChange = (event) => {
        setNewFeature(event.target.value);
    };

    const handleAddFeature = () => {
        if (newFeature) {
            setFeaturesList([...featuresList, newFeature]);
            setNewFeature("");
        }
    };

    const handleRemoveFeature = (index) => {
        setFeaturesList((prevFeaturesList) => {
            const newFeaturesList = [...prevFeaturesList];
            newFeaturesList.splice(index, 1);
            return newFeaturesList;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBusDetails({
            // id: "",
            registrationNumber:"",
            vehicleMake: "",
            vehicleModel: "",
            manufacturingYear:0,
            seating: {
                capacity: 0,
                dim: {
                    row: {
                        left: 0,
                        right:0
                    }
                }
            },
            ac: false,
            fare: 0,
            features: featuresList,
            colour:"",
        });
        setFeaturesList([]);
        setNewFeature("");

        // console.log(busDetails);
        axios.post("http://localhost:4040/bus", busDetails)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="container mx-auto p-10">
            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Add Bus Details</h2>
                <form onSubmit={handleSubmit}>
                    {/* ID */}
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">ID</span>
                        </label>
                        <input
                            name="id"
                            type="text"
                            value={busDetails.id}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
                            placeholder="Enter ID"
                        />
                    </div> */}

                    {/* Regis Number */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Registration number</span>
                        </label>
                        <input
                            name="registrationNumber"
                            type="text"
                            value={busDetails.registrationNumber}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
                            placeholder="Enter Registration number"
                        />
                    </div>

                    {/*Vehicle make*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Vehicle Make</span>
                        </label>
                        <input
                            name="vehicleMake"
                            type="text"
                            value={busDetails.vehicleMake}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
                            placeholder="Enter Vehicle Make"
                        />
                    </div>

                    {/* vehicleModel */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Vehicle Model</span>
                        </label>
                        <input
                            name="vehicleModel"
                            type="text"
                            value={busDetails.vehicleModel}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
                            placeholder="Enter Vehicle Model"
                        />
                    </div>

                    {/* manufacturingYear */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Manufacturing Year</span>
                        </label>
                        <input
                            name="manufacturingYear"
                            type="number"
                            className="input input-bordered w-full"
                        />
                    </div>


                    {/* Vehicle Class */}
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Vehicle Class</span>
                        </label>
                        <select
                            name="vehicleClass"
                            value={busDetails.vehicleClass}
                            onChange={handleInputChange}
                            className="select select-bordered w-full"
                        >
                            <option value="" disabled>Select Vehicle Class</option>
                            <option value="Sleeper">Sleeper</option>
                            <option value="Semi-sleeper">Semi-sleeper</option>
                            <option value="Seater">Seater</option>
                        </select>
                    </div> */}

                    {/* AC */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">AC</span>
                        </label>
                        <div className="flex items-center">
                            <input
                                name="ac"
                                type="checkbox"
                                checked={busDetails.ac}
                                onChange={handleInputChange}
                                className="toggle toggle-primary"
                            />
                        </div>
                    </div>

                    {/* Fare */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Fare</span>
                        </label>
                        <input
                            name="fare"
                            type="number"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Capacity */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Capacity</span>
                        </label>
                        <input
                            name="capacity"
                            type="number"
                            className="input input-bordered w-full"
                        />
                    </div>
                    
                    {/* Seating Left */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seating Left</span>
                        </label>
                        <input
                            name="left"
                            type="number"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Seating Right */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seating Right</span>
                        </label>
                        <input
                            name="right"
                            type="number"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* colour */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Colour</span>
                        </label>
                        <input
                            name="colour"
                            type="text"
                            value={busDetails.colour}
                            onChange={handleInputChange}
                            className="input input-bordered w-full"
                            placeholder="Enter colour"
                        />
                    </div>

                    {/* Features */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Features</span>
                        </label>
                        <div className="flex items-center justify-between">
                        <input
                            name="newFeature"
                            type="text"
                            className="input input-bordered w-full"
                            value={newFeature}
                            onChange={handleFeatureInputChange}
                        />
                        <button type="button" className="btn btn-primary btn-outline w-12 m-1" onClick={handleAddFeature}>
                            <PlusIcon className="w-4 h-4"/> 
                        </button>
                        </div>
                        <ul>
                            {featuresList.map((feature, index) => (
                                <li key={feature} className="flex items-center justify-between">
                                    <span>{feature}</span>
                                    <button type="button" className="btn btn-secondary btn-outline w-12 m-1" onClick={() => handleRemoveFeature(index)}>
                                        <XIcon className="w-5 h-5" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Submit Button */}
                    <button className="btn btn-primary mt-4" type="submit">
                        Add Bus
                    </button>
                </form>
            </div>
        </div>
    );
}
export default BusDetailsForm;
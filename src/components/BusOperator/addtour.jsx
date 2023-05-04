import React, { useState } from 'react';
import { XIcon, PlusIcon } from '@heroicons/react/outline';
import axios from 'axios';

const TourDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    duration: 0,
    capacity: 0,
    ratingsAverage: 0,
    price: 0,
    terms: '',
    description: '',
    startLocation: {
      type: 'Point',
      coordinates: [0, 0],
      address: '',
      description: '',
    },
    locations: [],
    BusDriver: '',
    VehicleId: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/tours', formData)
      .then(response => {
        console.log('Tour data sent:', formData);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto p-10">
   <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Add Tour Details</h2>
    <form onSubmit={handleSubmit}>

    <div className="form-control">
     <label className="label">
        <span className="label-text"></span>
      </label>
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleInputChange}
        className="input input-bordered w-full"
        placeholder="Enter ID"
        />
    </div>

    <div className="form-control">
     <label className="label">
        <span className="label-text">Tour Duration</span>
      </label>
      <input
        name="duration"
        type="number"
        value={formData.duration}
        onChange={handleInputChange}
        className="input input-bordered w-full"
        placeholder="Enter ID"
        />
    </div>

    <div className="form-control">
     <label className="label">
        <span className="label-text">Tour Capacity</span>
      </label>
      <input
        name="capacity"
        type="number"
        value={formData.capacity}
        onChange={handleInputChange}
        className="input input-bordered w-full"
        placeholder="Enter ID"
        />
    </div>

    <div className="form-control">
     <label className="label">
        <span className="label-text">Average Rating</span>
      </label>
      <input
        name="ratingsAverage"
        type="number"
        value={formData.ratingsAverage}
        onChange={handleInputChange}
        className="input input-bordered w-full"
        placeholder="Enter ID"
        />
    </div>

    <div className="form-control">
     <label className="label">
        <span className="label-text">Tour Price</span>
      </label>
      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleInputChange}
        className="input input-bordered w-full"
        placeholder="Enter ID"
        />
    </div>

    <div className="form-control">
     <label className="label">
        <span className="label-text">Tour Terms</span>
      </label>
      <textarea
        name="terms"
        value={formData.terms}
        onChange={handleInputChange}
        className="input input-bordered w-full"
        placeholder="Enter ID"
        />
    </div>

    <div className="form-control">
     <label className="label">
        <span className="label-text">Tour Description</span>
      </label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        className="input input-bordered w-full"
        placeholder="Enter ID"
        />
    </div>

    <div className="form-control">
     <label className="label">
        <span className="label-text">Tour Start Location</span>
      </label>
      <textarea
        type="text"
        name="startLocation.type"
        value={formData.startLocation.type}
        onChange={handleInputChange}
        className="input input-bordered w-full"
        placeholder="Enter ID"
        />
       <label className="label">
        Coordinates:
        <input type="text" name="startLocation.coordinates[0]" value={formData.startLocation.coordinates[0]} onChange={handleInputChange} />
        <input type="text" name="startLocation.coordinates[1]" value={formData.startLocation.coordinates[1]} onChange={handleInputChange} />
    </label>
    <label className="label">
        Address:
        <input type="text" name="startLocation.address" value={formData.startLocation.address} onChange={handleInputChange} />
    </label>
    <label className="label">
        Description:
        <textarea name="startLocation.description" value={formData.startLocation.description} onChange={handleInputChange}></textarea>
    </label>
    </div>

    <div className="form-control">
    <label className="label">
        <span className="label-text">Tour Locations:</span>
      </label>
    {formData.locations.map((location, index) => (
        <label key={index} className="label">
        Type:
        <input type="text" name={`locations[${index}].type`} value={location.type} onChange={handleInputChange} />
        Coordinates:
        <input type="text" name={`locations[${index}].coordinates[0]`} value={location.coordinates[0]} onChange={handleInputChange} />
        <input type="text" name={`locations[${index}].coordinates[1]`} value={location.coordinates[1]} onChange={handleInputChange} />
        Address:
        <input type="text" name={`locations[${index}].address`} value={location.address} onChange={handleInputChange} />
        Description:
        <textarea name={`locations[${index}].description`} value={location.description} onChange={handleInputChange}></textarea>
        </label>
    ))}
    <button type="button" onClick={() => setFormData(prevFormData => ({
        ...prevFormData,
        locations: [
        ...prevFormData.locations,
        {
            type: 'Point',
            coordinates: [0, 0],
            address: '',
            description: '',
            stop: prevFormData.locations.length
        }
        ]
    }))}>Add Location</button>
    </div>

    <div className="form-control">
     <label className="label">
        <span className="label-text">Bus Drivers</span>
      </label>
      <input
        name="name"
        type="text"
        value={formData.BusDriver}
        onChange={handleInputChange}
        className="input input-bordered w-full"
        placeholder="Enter ID"
        />
    </div>

    <div className="form-control">
     <label className="label">
        <span className="label-text">VechileId</span>
      </label>
      <input
        name="name"
        type="text"
        value={formData.VehicleId}
        onChange={handleInputChange}
        className="input input-bordered w-full"
        placeholder="Enter ID"
        />
    </div>

    <button className="btn btn-primary mt-4" type="submit">
                        Add TOur
                    </button>
    </form>
    </div>
    </div>
  );
};

export default TourDetailsForm;
import React, { useState } from 'react';
import axios from 'axios';

const ViewBus = () => {
  const [busId, setBusId] = useState('');
  const [bus, setBus] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setBusId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:4040/bus?id=${busId}`);
      setBus(response.data);
      setError('');
    } catch (error) {
      setBus(null);
      setError('Bus not found!');
    }
  };

  return (
    <div className='container mx-auto p-10'>
      <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md mb-10 p-6">
        <h2 className="text-2xl font-bold mb-4">Search Bus (by id)</h2>
        <form onSubmit={handleSubmit}>
          <label className="label">
            Enter Bus ID:
            <input type="text" className="input input-bordered" value={busId} onChange={handleInputChange} />
          </label>
          <button className="btn btn-primary mt-4" type="submit">Search</button>
        </form>
      </div>
      {error && <p>{error}</p>}
      {bus && (
        <div className="bg-white bordered-violet-300 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold">{bus.name}</h2>
          <p className="text-gray-700">Bus ID: {bus.id}</p>
          <p className="text-gray-700">Vehicle Class: {bus.vehicleClass} {bus.ac?"AC":"Non-AC"}</p>
          <p className="text-gray-700">Fare: {bus.fare}</p>
          <p className="text-gray-700">Capacity: {bus.capacity}</p>
          <p className="text-gray-700">Bus Features: {bus.features.join(", ")}</p>
        </div>
      )}

    </div>
  );
};

export default ViewBus;
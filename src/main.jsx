import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import { Signup, Login, BusDetailsForm, ViewBus, SeatSelector } from './components'
import './index.css'

const seats = [
  ["1A", "2A", "3A", "4A", "5A", "6A"],
  ["1B", "2B", "3B", "4B", "5B", "6B"],
  ["1C", "2C", "3C", "4C", "5C", "6C"],
  ["1D", "2D", "3D", "4D", "5D", "6D"],
  ["1E", "2E", "3E", "4E", "5E", "6E"]
];

const reservedSeats = ["2C", "3D", "4E"];

const handleSeatSelect = (selectedSeats) => {
  console.log("Selected seats:", selectedSeats);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/addbus" element={<BusDetailsForm />} />
        <Route exact path="/viewbus" element={<ViewBus />} />
        <Route exact path="/seatSelect" element={<SeatSelector
          seats={seats}
          reservedSeats={reservedSeats}
          onSelect={handleSeatSelect}
        />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

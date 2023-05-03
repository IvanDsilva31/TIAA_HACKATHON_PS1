import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../MainPage/Navbar';
import SearchBar from '../Passenger/SearchBar';
import SearchFilters from '../Passenger/SearchFilters';

function UserDashboard(){
  const [reservations, setReservations] = useState([]);
    return (
      
      <div>
        <h1>Hello wolrd</h1>
        <Navbar />
        <SearchBar />
        <SearchFilters />
      </div>
    );
  };
export default UserDashboard;

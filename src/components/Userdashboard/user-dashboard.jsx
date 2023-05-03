import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../MainPage/Navbar';

function UserDashboard(){
  const [reservations, setReservations] = useState([]);
    return (
      
      <div>
        <h1>Hello wolrd</h1>
        <Navbar />
      </div>
    );
  };
export default UserDashboard;

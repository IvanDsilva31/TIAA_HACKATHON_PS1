import React, { useState } from 'react';
import Navbar from '../MainPage/Navbar';
import axios from 'axios';
import { passengerLinks } from '../../data/swiftTravelData';

function BusDetailsCard({ vehicleClass, ac, fare, capacity, features }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 w-full max-w-md">
      <h2 className="text-lg font-bold mb-2">Bus Details</h2>
      <p className="text-gray-700 mb-2">
        <strong>Vehicle Class:</strong> {vehicleClass}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>AC:</strong> {ac ? "Yes" : "No"}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Fare:</strong> ${fare}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Capacity:</strong> {capacity}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Features:</strong> {features.join(", ")}
      </p>
    </div>
  );
}


function PaymentPage() {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [paymentData, setPaymentData] = useState({});

  const busDetails = {
    vehicleClass: "Semi-Sleeper",
    ac: true,
    fare: 150,
    capacity: 30,
    features: ["WiFi", "Charging Ports"],
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPaymentSuccessful(true);
    try {
      const response = await axios.post('/api/payments', {
        busDetails,
        paymentData,
      });

      setIsPaymentSuccessful(true);
    } catch (error) {
      console.error(error);
      // handle error case
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className=" flex justify-center md:justify-end -mr-15">
      <Navbar navlinks={passengerLinks}/>
      <div className="flex justify-center py-5 px-20 my-60 mr-5">
        <BusDetailsCard {...busDetails} />
      </div>
      <div className="max-w-md py-6 px-8 bg-white shadow-lg rounded-lg my-40 mr-20 ">
        <h2 className="text-2xl font-bold mb-8 flex justify-center">Make Payment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name on Card</label>
            <input type="text"
              id="name" name="name" placeholder="John Doe" value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-lg px-3 hover:border-indigo-500 py-2 w-full" required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="cardNumber" className="block text-gray-700 font-bold mb-2">Card Number</label>
            <input type="text"
              id="cardNumber" name="cardNumber" placeholder="XXXX XXXX XXXX XXXX" value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="border rounded-lg px-3 hover:border-indigo-500 p-2 w-full" required
            />
          </div>
          <div className="mb-7 flex">
            <div className="w-1/2 mr-2">
              <label htmlFor="expirationDate" className="block text-gray-700 font-bold mb-2">Expiration Date</label>
              <input type="date"
                id="expirationDate" name="expirationDate" placeholder="MM/YY" value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                className="border rounded-lg px-3 hover:border-indigo-500 p-2 w-full" required
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="cvv"
                className="block text-gray-700 font-bold mb-2">CVV</label>
              <input type="text" id="cvv" name="cvv" placeholder="XXX" value={cvv} onChange={(e) => setCvv(e.target.value)}
                className="border rounded-lg px-3 hover:border-indigo-500 p-2 w-full " required
              />
            </div>
          </div>
          <button type="submit"
            className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-indigo-600 shadow-lg rounded-lg hover:bg-gray-900">Submit Payment</button>
        </form>
        <div className="flex flex-col items-center justify-center mb-4 mt-6">
          {isPaymentSuccessful ? (
            <p className="text-green-500 text-3xl font-bold">
              Payment successful!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md">
              {/* Payment form code here */}
            </form>
          )}
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;



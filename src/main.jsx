import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import { Signup, Login, BusDetailsForm, ViewBus } from './components'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/addbus" element={<BusDetailsForm />} />
        <Route exact path="/viewbus" element={<ViewBus />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

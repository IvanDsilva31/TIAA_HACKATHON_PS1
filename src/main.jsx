import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import {
  Signup,
  Login,
  RequireAuth,
  BusDetailsForm,
  ViewBus,
  SeatSelector,
  SeatSelectPage,
  PaymentPage,
  PassengerDashboard,
  SearchBar,
  // AllTours,
} from "./components";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./index.css";
import { manyBusDetails } from "./data/swiftTravelData";

const ROLES = {
  User: 2001,
  BusOperator: 1984,
};

const seats = [
  ["1A", "2A", "3A", "4A", "5A", "6A"],
  ["1B", "2B", "3B", "4B", "5B", "6B"],
  ["1C", "2C", "3C", "4C", "5C", "6C"],
  ["1D", "2D", "3D", "4D", "5D", "6D"],
  ["1E", "2E", "3E", "4E", "5E", "6E"],
];

const reservedSeats = ["2C", "3D", "4E", "6A", "6B"];

const handleSeatSelect = (selectedSeats) => {
  console.log("Selected seats:", selectedSeats);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route element={<RequireAuth allowedRoles={[ROLES.BusOperator]} />}>
            <Route exact path="/addbus" element={<BusDetailsForm />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={[ROLES.BusOperator]} />}>
            <Route exact path="/viewbus" element={<ViewBus />} />
          </Route>
          <Route >
            <Route exact path="/userboard" element={<PassengerDashboard manyBusDetails={manyBusDetails}  />} />
          </Route>
          {/* <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route exact path="/userboard" element={<PassengerDashboard manyBusDetails={manyBusDetails}  />} />
          </Route> */}
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}/>
            <Route
              exact
              path="/seatSelect"
              element={
                <SeatSelector
                  seats={seats}
                  reservedSeats={reservedSeats}
                  onSelect={handleSeatSelect}
                />
              }
            /> 
          <Route exact path="/seatSelect" element={<SeatSelectPage />} />
          {/* </Route> */}
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route exact path="/searchBar" element={<SearchBar />} />
          </Route>
          {/* <Route exact path="/searchfilter" element={<SearchFilters />} /> */}
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route exact path="/paymentpage" element={<PaymentPage />} />
            {/* <Route exact path="/searchBuses" element={<SearchBusesPage/>} /> */}
          </Route>
          <Route path="/busopdash">
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productsId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

import React, { useState } from "react";
import axios from "axios";
import img from "../../images/register.jpg";
import { Link } from "react-router-dom";

function InitialSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4040/initial-signup", { email, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      className="w-screen h-screen bg-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="container mx-auto p-10 flex flex-wrap justify-center">
        <div className="md:w-3/4 lg:w-2/3 xl:w-2/3 p-5">
          <div className="card shadow-lg mt-8 p-10 bg-gray-100">
            <div className="card-header">
              <h2 className="text-2xl font-bold">Sign Up</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="input input-bordered w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="input input-bordered w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <Link to="/signup">
                  <button className="btn btn-primary mt-4" type="submit">
                    Sign Up
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitialSignUp;

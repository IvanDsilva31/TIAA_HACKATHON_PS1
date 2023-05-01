import React, { useState } from "react";
import axios from "axios";
import img from "../../images/register.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://example.com/api/login", { email, password })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container mx-auto p-10 flex flex-wrap justify-center">
      <div className="md:w-3/4 lg:w-2/3 xl:w-2/3 p-5">
        <div className="card shadow-lg mt-8 p-10">
          <div className="card-header">
            <h2 className="text-2xl font-bold">Login</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {/* Email */}
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

              {/* Password */}
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

              {/* Submit Button */}
              <button className="btn btn-primary mt-4" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/4 xl:w-1/3 block md:hidden">
        <img
          src={img}
          alt="login-image"
          className="w-20 h-20 object-fill"
        />
      </div>
    </div>
  );
}

export default Login;

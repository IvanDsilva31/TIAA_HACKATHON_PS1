import React, { useState } from "react";
import axios from "axios";
import img from "../../images/register.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  function handleClick() {
    setShowAlert(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4040/login", { email, password })
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
              <h2 className="text-2xl font-bold">Login</h2>
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
                    required
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
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  onClick={handleClick}
                  className="btn btn-primary mt-4"
                  type="submit"
                >
                  Login
                </button>
                {showAlert && (
                  <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center">
                    <div className="alert alert-success shadow-lg max-w-sm mt-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>You have successfully logged in!</span>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

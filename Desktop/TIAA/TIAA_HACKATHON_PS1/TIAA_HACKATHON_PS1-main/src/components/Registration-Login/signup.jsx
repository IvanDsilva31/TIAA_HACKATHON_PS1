import React, { useState } from "react";
import axios from "axios";
import img from "../../images/register.jpg";

function Signup() {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data.selectedRole = selectedRole;
    console.log(data);
    axios
      .post("http://localhost:4040/signup", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-[url('/src/images/bg-signup.jpg')]">
      <div className="container mx-auto p-10 flex flex-wrap justify-center">
        <div className="md:w-3/4 lg:w-2/3 xl:w-2/3 p-5 bg-white">
          <div className="card shadow-lg">
            <div className="card-header p-10">
              <h2 className="text-xl font-bold">Choose your role</h2>
            </div>
            <div className="card-body">
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  className={`btn btn-md ${
                    selectedRole === "passenger"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => handleRoleClick("passenger")}
                >
                  Passenger
                </button>
                <button
                  className={`btn btn-md ${
                    selectedRole === "bus_operator"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => handleRoleClick("bus_operator")}
                >
                  Bus Operator
                </button>
                <button
                  className={`btn btn-md ${
                    selectedRole === "driver"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => handleRoleClick("driver")}
                >
                  Driver
                </button>
              </div>
            </div>
          </div>

          {selectedRole && (
            <div className="card shadow-lg mt-8 p-10">
              <div className="card-header">
                <h2 className="text-2xl font-bold">
                  Register as {selectedRole}
                </h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {selectedRole === "bus_operator" && (
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Bus Operator Name</span>
                      </label>
                      <input
                        name="bus_operator_name"
                        type="text"
                        className="input input-bordered w-full"
                      />
                    </div>
                  )}

                  {/* Driver License Number */}
                  {selectedRole === "driver" && (
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">
                          Driver License Number
                        </span>
                      </label>
                      <input
                        name="driver_license_number"
                        type="text"
                        className="input input-bordered w-full"
                      />
                    </div>
                  )}

                  {/* Company Name */}
                  {selectedRole !== "passenger" && (
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Company Name</span>
                      </label>
                      <input
                        name="company_name"
                        type="text"
                        className="input input-bordered w-full"
                      />
                    </div>
                  )}

                  {/* Phone Number */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      name="phone_number"
                      type="text"
                      className="input input-bordered w-full"
                    />
                  </div>

                  {/* Address */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <textarea
                      name="address"
                      className="textarea h-24 textarea-bordered w-full"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button className="btn btn-primary mt-4" type="submit">
                    Register
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;

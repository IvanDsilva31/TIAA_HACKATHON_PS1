import React, { useEffect, useState, useRef, useContext } from "react";
import AuthContext from "/src/context/AuthProvider";
import UseAuth from "/src/hooks/useAuth";
import axios from "axios";
import "boxicons/css/boxicons.min.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Login() {
  const { setAuth } = UseAuth();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const errRef = useRef();

  const [emailSign, setEmailSign] = useState("");
  const [passwordSign, setPasswordSign] = useState("");
  const [age, setAge] = useState("");
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const [errMsg, setErrMsg] = useState("");

  const handleSubmitSign = async (event) => {
    event.preventDefault();
    if (isSubmitted) {
      // Redirect to another link
      setShouldRedirect(true);
    }
    try {
      const response = await axios.post(
        "http://localhost:4040/login",
        JSON.stringify({ emailSign, passwordSign, age }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("USername Token");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  };

  if (shouldRedirect) {
    return <Redirect to="/signup" />;
  }

  const handleSubmitLog = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4040/auth",
        JSON.stringify({ emailLog, passwordLog }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ emailLog, passwordLog, roles, accessToken });
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <div className={`container-log ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmitLog} className="sign-in-form">
            <h2 className="title">Log In</h2>
            <div className="input-field">
              <i className="bx bxs-user"></i>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input w-full"
                value={emailLog}
                required
                onChange={(e) => setEmailLog(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="bx bxs-lock-alt"></i>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
                value={passwordLog}
                required
                onChange={(e) => setPasswordLog(e.target.value)}
              />
            </div>
            <button type="submit" value="Login" className="btn solid">
              Login
            </button>
          </form>
          <form onSubmit={handleSubmitSign} className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="bx bxs-envelope"></i>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                value={emailSign}
                required
                onChange={(e) => setEmailSign(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="bx bxs-lock-alt"></i>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
                value={passwordSign}
                required
                onChange={(e) => setPasswordSign(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="bx bx-time"></i>
              <input
                name="age"
                type="number"
                placeholder="Age"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* <Link to="{/signup}"> */}
            <button type="submit" value="Sign Up" className="btn solid">
              Sign Up
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Sign up to avail more services. Pack your bags and start your
              journey with us!
            </p>
            <button
              className="btn-log transparent"
              id="sign-up-btn"
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </div>
          <img
            src="/src/images/Profiling_Monochromatic.png"
            className="image-log"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Log in to start your journey.</p>
            <button
              className="btn-log transparent"
              id="sign-in-btn"
              onClick={handleSignInClick}
            >
              Login
            </button>
          </div>
          <img
            src="/src/images/Authentication_Outline.png"
            className="image-log"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

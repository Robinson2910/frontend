import React, { useState, useEffect } from "react";
// import "../../Stylesheets/AppComponents/LoginPage.scss";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WarningIcon from "@mui/icons-material/Warning";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { userid } from "../../../Redux/Slice";
// import { useSelector, useDispatch } from "react-redux";
// import { getUserAction } from "../../Redux/Slice";
// import LoginNavbar from "./LoginNavbar";
import "../LoginPage.css";
import logo from "../img/logo 4k.jpg";
import icon from "../img/icon 4k.png";

const LoginPage = () => {
  // const dispatch = useDispatch();

  const [UserDetails, setUserDetails] = useState({ email: "", password: "" });
  const [viewpass, setViewpass] = useState(false);
  const [emailerror, setemailerror] = useState(false);
  const [passworderror, setPassworderror] = useState(false);

  //   const userData = useSelector((state) => state.users);

  const handleChange = (e) => {
    setUserDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });

    if (UserDetails.email.includes("@")) {
      setemailerror(false);
    }
  };

  const handleSubmit = () => {
    if (UserDetails.email.length > 3 && UserDetails.email.includes("@")) {
      setemailerror(false);
      if (UserDetails.password.length > 0) {
        setPassworderror(false);

        console.log(UserDetails, "1q");

        // dispatch(getUserAction(UserDetails));

        console.log(UserDetails, "1w");
      } else {
        setPassworderror(true);
      }
    } else {
      setemailerror(true);
    }
  };

  const handleClick = () => {
    window.location.href = "/userregister";
  };

  return (
    <div className="login-page">
      <div className="container login-page-grid">
        <div className="image-column">
          <img src={logo} alt="logo" className="logo-img" />
          <img src={icon} alt="icon" className="icon-img" />
        </div>
        {/* <div className="form-column">
          <div className="form-box ">
            <p className="welcome-heading text-center margin-bottom-vsmall">WELCOME TO</p>
            <p className="portal-heading margin-bottom-large text-center">JOB PORTAL</p>
            <div className="input-box container margin-bottom-small">
              <div className="label ">Email ID or Phone Number{"  "}</div>
              <input
                type={"email"}
                name="email"
                value={UserDetails.email}
                placeholder="Enter your email"
                onChange={(e) => handleChange(e)}
                className="input"
              />
            </div>
            <div className="input-box container margin-bottom-vsmall">
              <div className="label ">Password{"  "}</div>
              <input
                type={`text`}
                className={`${viewpass ? "input activate" : "input notactivate"}`}
                name="password"
                value={UserDetails.password}
                placeholder="Enter password"
                autoComplete="off"
                onChange={(e) => handleChange(e)}
              />
              <i className="icon">
                {viewpass ? (
                  <VisibilityOffIcon onClick={(e) => setViewpass(!viewpass)}></VisibilityOffIcon>
                ) : (
                  <RemoveRedEyeIcon onClick={(e) => setViewpass(!viewpass)}></RemoveRedEyeIcon>
                )}
              </i>
            </div>
            <div className="container forgot-password-box margin-bottom-small">
              <a href=" ">Forgot Password</a>
            </div>
            <button type="button" className="login-btn container">
              Login
            </button>
            <div className="account-signup-box container">
              <a href=" ">Don't have an account?</a>
              <a href=" ">Sign Up</a>
            </div>
          </div>
        </div> */}
        <div className="form-column">
          <div className="form-box container">
            <p className="welcome-heading text-center margin-bottom-vsmall">WELCOME TO</p>
            <p className="portal-heading margin-bottom-large text-center">JOB PORTAL</p>
            <div className="input-box  margin-bottom-small">
              <div className="label ">Email ID or Phone Number{"  "}</div>
              <input
                type={"email"}
                name="email"
                value={UserDetails.email}
                placeholder="Enter your email"
                onChange={(e) => handleChange(e)}
                className="input"
                required
              />
            </div>
            <div className={`${emailerror ? "show error-message-box" : "hide"}`}>
              <i className="icon">
                <WarningIcon />
              </i>
              <span>&nbsp; Email required!</span>
            </div>
            <div className="input-box  margin-bottom-small">
              <div className="label ">Password{"  "}</div>

              <input
                type={`text`}
                className={`${viewpass ? "activate" : "notactivate"}`}
                name="password"
                value={UserDetails.password}
                placeholder="Enter password"
                autoComplete="off"
                onChange={(e) => handleChange(e)}
              />
              <i className="icon">
                {viewpass ? (
                  <RemoveRedEyeIcon onClick={(e) => setViewpass(!viewpass)}></RemoveRedEyeIcon>
                ) : (
                  <VisibilityOffIcon onClick={(e) => setViewpass(!viewpass)}></VisibilityOffIcon>
                )}
              </i>
            </div>
            <div
              className={`${passworderror ? "show error-message-box" : "hide error-message-box"}`}
            >
              <i className="icon">
                <WarningIcon />
              </i>
              <span>&nbsp; Password required!</span>
            </div>
            <div className=" forgot-password-box margin-bottom-small">
              <a href=" " className="forget-password-link">
                Forgot Password
              </a>
            </div>
            <button type="button" className="login-btn " onClick={(e) => handleSubmit()}>
              Login
            </button>
            <div className="account-signup-box ">
              <a href=" " className="no-account-link">
                Don't have an account?
              </a>
              <a href=" " className="signup-link" onClick={(e) => handleClick()}>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

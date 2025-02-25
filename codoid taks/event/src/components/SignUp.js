import React, { useState, useRef } from "react";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

import "../LoginPage.css";
import logo from "../img/logo 4k.jpg";
import icon from "../img/icon 4k.png";

const SignUp = () => {
  const [viewpass, setViewpass] = useState(false);

  const [dropdownlist, setdropdownlist] = useState(["Company", "Student"]);
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState(false);

  function selectFiles() {
    fileInputRef.current.click();
  }
  const displayFileName = () => {
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      const fullPath = fileInput.value;
      const fileName = fullPath.split("\\").pop();
      setFileName(fileName);
    }
  };

  return (
    <div className="signup-page">
      <div className="container signup-page-grid">
        <div className="image-column">
          <img src={logo} alt="logo" className="logo-img" />
          <img src={icon} alt="icon" className="icon-img" />
        </div>

        <div className="form-column">
          <div className="form-box container">
            {/* <p className="welcome-heading text-center margin-bottom-vsmall">WELCOME TO</p> */}
            <p className="signup-heading text-center">Sign Up</p>
            <p className="para ">Please fill in this form to create an account</p>
            <div className="name-box">
              <div className="input-box  margin-bottom-small">
                <div className="label ">First Name{"  "}</div>
                <input type={"text"} name="first_name" placeholder="First Name" className="input" />
              </div>
              <div className="input-box  margin-bottom-small">
                <div className="label ">Last Name{"  "}</div>
                <input type={"text"} name="Last Name" placeholder="Last Name" className="input" />
              </div>
            </div>
            <div className="input-box  margin-bottom-small">
              <div className="label ">Email{"  "}</div>
              <input type={"email"} name="email" placeholder="Enter your email" className="input" />
            </div>
            {/* <div className="input-box  margin-bottom-small">
              <div className="label ">Password{"  "}</div>

              <input
                type={`text`}
                className={`${viewpass ? "activate" : "notactivate"}`}
                name="password"
                placeholder="Enter password"
                autoComplete="off"
              />
              <i className="icon">
                {viewpass ? (
                  <VisibilityOffIcon onClick={(e) => setViewpass(!viewpass)}></VisibilityOffIcon>
                ) : (
                  <RemoveRedEyeIcon onClick={(e) => setViewpass(!viewpass)}></RemoveRedEyeIcon>
                )}
              </i>
            </div> */}
            <div className="input-box  margin-bottom-small">
              <div className="label ">Phone Number{"  "}</div>

              <input type={`number`} name="contact_no" placeholder="Enter Phone Number" />
            </div>
            <div className="name-box">
              <div className="input-box  margin-bottom-small">
                <div className="label ">Role{"  "}</div>
                <select>
                  <option value="" selected disabled>
                    Please Select...
                  </option>
                  {dropdownlist.map((ele, index) => {
                    return (
                      <option value={ele} key={index}>
                        {ele}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="input-box  margin-bottom-small">
                <div className="label ">Upload Your Profile Picture{"  "}</div>

                <input
                  id="file-input"
                  name="file"
                  type="file"
                  className="file"
                  ref={fileInputRef}
                  onChange={() => displayFileName()}
                />
                <div className="f-box">
                  <span>{fileName}</span>
                  <i className="icon arrow-icon" onClick={() => selectFiles()}>
                    {<ArrowCircleUpIcon />}
                  </i>
                </div>
              </div>
            </div>
            {/* <div className="input-box  margin-bottom-small">
              <div className="label ">Role{"  "}</div>
              <select>
                <option value="" selected disabled>
                  Please Select...
                </option>
                {dropdownlist.map((ele, index) => {
                  return (
                    <option value={ele} key={index}>
                      {ele}
                    </option>
                  );
                })}
              </select>
            </div> */}
            {/* <div className="input-box  margin-bottom-small">
              <div className="label ">Upload Your Profile Picture{"  "}</div>

              <input
                id="file-input"
                name="file"
                type="file"
                className="file"
                ref={fileInputRef}
                onChange={() => displayFileName()}
              />
              <div className="f-box">
                <span>{fileName}</span>
                <i className="icon arrow-icon" onClick={() => selectFiles()}>
                  {<ArrowCircleUpIcon />}
                </i>
              </div>
            </div> */}

            <button type="button" className="signup-btn ">
              Sign Up
            </button>
            <div className="account-signup-box ">
              <a href=" " className="already-account-link">
                Already have an account?
              </a>
              <a href=" " className="login-link">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

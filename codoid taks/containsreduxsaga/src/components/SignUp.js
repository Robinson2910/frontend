import React, { useState, useEffect, useRef, useCallback } from "react";
// import "../../../Stylesheets/MainComponents/User/UserRegister.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WarningIcon from "@mui/icons-material/Warning";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PhoneIcon from "@mui/icons-material/Phone";
import validator from "validator";
// import LoginNavbar from "../../AppComponents/LoginNavbar";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import { useSelector, useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DeleteIcon from "@mui/icons-material/Delete";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import ViewListIcon from "@mui/icons-material/ViewList";
// import { useNavigate } from "react-router-dom";
import $ from "jquery";
// register form
import {
  getRegisterForm,
  getRegisterFormSuccessAction,
  getRegisterFormErrorAction,
  getSignupVerifyAction,
  getSignupVerifyEmptyAction,
  getSignupotpsendAction,
  getSignupotpsendEmptyAction,
  getOtpVerifyAction,
  otpid,
  getOtpVerifyEmptyAction,
} from "../Redux/Slice";

import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

import "../CSS/LoginPage.css";
import logo from "../img/logo 4k.jpg";
import icon from "../img/icon 4k.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  // const [viewpass, setViewpass] = useState(false);

  // const [dropdownlist, setdropdownlist] = useState(["Company", "Student"]);
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

  // logic from other code

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);
  const otpresid = useSelector((state) => state.IdData.otpid);
  console.log(otpresid);
  const [url, setUrl] = useState();
  const [profileUpload, setProfileUpload] = useState([]);

  const [userRegisterDetails, setUserRegisterDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    contact_no: "",
    role: "SuperAdmin",
    company_name: "",
    resume: "",
  });
  const formData = new FormData();

  const [otpscreen, setotpscreen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userFirstNameError, setFirstUserNameError] = useState(false);
  const [error, seterror] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [viewpass, setViewpass] = useState(false);
  const [roleerror, setrolrerror] = useState(false);
  const [companynameerror, setcompanynameerror] = useState(false);
  const [contactemailerror, setcontactemailerroe] = useState(false);
  const [dropdownlist, setdropdownlist] = useState(["Company", "Student"]);
  const [companyfield, setcompanyfield] = useState(false);
  const Signupverifyres = useSelector((state) => state.Signupverifydata);
  const otpsendres = useSelector((state) => state.Signupotpsenddata);
  const otpverifyres = useSelector((state) => state.OtpVerifyData);
  const handleOptionClick = (e) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
    // var roles = e.target.value;
    // const { name, value } = e.target;
    if (e.target.value == "Company") {
      setcompanyfield(true);
      setUserRegisterDetails({
        ...userRegisterDetails,
        role: e.target.value,
      });
    } else {
      setcompanyfield(false);
      setUserRegisterDetails({
        ...userRegisterDetails,
        company_name: "",
        contact_email: "",
        role: e.target.value,
      });
    }

    if (validator.isEmpty(e.target.value.trim())) {
      setrolrerror("*Role cannot be empty!");
    } else {
      setrolrerror("");
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const validateFirstNameName = (e) => {
    var firstname = e.target.value;
    const { name, value } = e.target;
    setUserRegisterDetails({
      ...userRegisterDetails,
      [name]: value,
    });
    if (validator.isEmpty(firstname.trim())) {
      setFirstUserNameError("*First Name cannot be empty!");
    } else {
      setFirstUserNameError("");
    }
  };

  const validateLastNameName = (e) => {
    var lastname = e.target.value;
    const { name, value } = e.target;

    setUserRegisterDetails({
      ...userRegisterDetails,
      [name]: value,
    });
  };

  const validateEmail = (e) => {
    var email = e.target.value;
    const { name, value } = e.target;

    setUserRegisterDetails({
      ...userRegisterDetails,
      [name]: value,
    });
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
      setEmailError("*Enter valid Email!");
    } else {
      setEmailError(false);
    }
  };

  const validatePassword = (e) => {
    const password = e.target.value;
    const { name, value } = e.target;

    setUserRegisterDetails({
      ...userRegisterDetails,
      [name]: value,
    });

    if (validator.isEmpty(password)) {
      setPasswordError("*Password cannot be empty!");
    } else if (!validator.isLength(password, { min: 6 })) {
      setPasswordError("*Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const validatePhone = (e) => {
    var number = e.target.value;
    const { name, value } = e.target;

    setUserRegisterDetails({
      ...userRegisterDetails,
      [name]: value,
    });
    if (validator.isEmpty(number)) {
      setNumberError("*Phone Number Cannot be empty!");
    } else if (
      validator.isMobilePhone(number) &&
      validator.isLength(e.target.value, { min: 10, max: 11 })
    ) {
      setNumberError("");
    } else {
      setNumberError("*Enter Valid Phone Number!");
    }
  };

  function preventEKeyPress(event) {
    const key = event.key.toLowerCase();
    if (key === "e" || key === "." || key === "-" || key === "+") {
      event.preventDefault();
    }
  }

  const validateCompanyName = (e) => {
    var companyname = e.target.value;
    const { name, value } = e.target;

    setUserRegisterDetails({
      ...userRegisterDetails,
      [name]: value,
    });
    if (validator.isEmpty(companyname.trim())) {
      setcompanynameerror("*Company Name cannot be empty!");
    } else {
      setcompanynameerror("");
    }
  };

  const validateContactEmail = (e) => {
    var contactemail = e.target.value;
    const { name, value } = e.target;
    setUserRegisterDetails({
      ...userRegisterDetails,
      [name]: value,
    });
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(contactemail)) {
      setcontactemailerroe("*Enter valid Email!");
    } else {
      setcontactemailerroe(false);
    }
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      setErrorMessage("");

      if (acceptedFiles.length === 1) {
        const a = acceptedFiles;
        console.log(acceptedFiles);
        setProfileUpload(acceptedFiles);

        setTimeout(() => {
          var reader = new FileReader();
          reader.onloadend = function () {
            console.log(reader);
            setUrl(reader.result);
          };
          reader.readAsDataURL(acceptedFiles[0]);
        }, 500);
      } else {
        setErrorMessage("Please upload only one image file.");
      }
    },
    [setProfileUpload]
  );

  const removeFile = (index) => {
    const updatedFiles = [...profileUpload];
    updatedFiles.splice(index, 1);
    setProfileUpload(updatedFiles);
    setUserRegisterDetails({
      ...userRegisterDetails,
      resume: updatedFiles,
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/jpeg,image/png",
    // multiple: false,
    maxFiles: 1,
  });

  const handleSignUp = (e) => {
    console.log(userRegisterDetails, "akdfuyak");
    if (
      userRegisterDetails.role == "Company"
        ? userRegisterDetails.first_name != "" &&
          userRegisterDetails.last_name != "" &&
          userRegisterDetails.email != "" &&
          userRegisterDetails.password != "" &&
          userRegisterDetails.contact_no != "" &&
          userRegisterDetails.role != "" &&
          userRegisterDetails.company_name != "" &&
          userRegisterDetails.contact_email != "" &&
          profileUpload.length > 0
        : userRegisterDetails.first_name != "" &&
          userRegisterDetails.last_name != "" &&
          userRegisterDetails.email != "" &&
          userRegisterDetails.password != "" &&
          userRegisterDetails.contact_no != "" &&
          userRegisterDetails.role != "" &&
          profileUpload.length > 0
    ) {
      dispatch(getSignupVerifyEmptyAction());

      console.log(userRegisterDetails, "akdfuyak");
      dispatch(
        getSignupVerifyAction({
          data: {
            email: userRegisterDetails.email,
            contact_no: userRegisterDetails.contact_no,
          },
        })
      );
    } else {
      seterror(true);
      if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(userRegisterDetails.email)) {
        setEmailError("*Enter valid Email!");
      }
      //
      if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(userRegisterDetails.contact_email)
      ) {
        setcontactemailerroe("*Enter valid Email!");
      } else {
        setcontactemailerroe(false);
      }

      //

      if (validator.isEmpty(userRegisterDetails.contact_no)) {
        setNumberError("*Phone Number Cannot be empty!");
      } else if (
        validator.isMobilePhone(userRegisterDetails.contact_no) &&
        validator.isLength(e.target.value, { min: 10, max: 11 })
      ) {
        setNumberError("");
      }
      // else {
      //   setNumberError("*Enter Valid Phone Number!");
      // }
    }
  };

  useEffect(() => {
    console.log(Signupverifyres, "dskjf");

    if (
      Signupverifyres.SignupVerifyData != undefined &&
      Signupverifyres.SignupVerifyData.status != undefined
    ) {
      if (Signupverifyres.SignupVerifyData.status.code == "200") {
        alert("dskjf");
        const data = {
          mobile: userRegisterDetails.contact_no,
        };
        dispatch(getSignupotpsendAction(data));
        setTimeout(() => {
          dispatch(getSignupVerifyEmptyAction());
        }, 300);
      }
    } else {
      console.log(Signupverifyres);
      if (Signupverifyres.error != undefined && Signupverifyres.error.status != undefined) {
        if (Signupverifyres.error.data == 1) {
          setEmailError(Signupverifyres.error.status.message);
        } else {
          setNumberError(Signupverifyres.error.status.message);
        }

        $(".userregister-inner").animate({ scrollTop: 0 }, "slow");
      }
    }
  }, [Signupverifyres]);

  useEffect(() => {
    if (
      otpsendres.SignupotpsendData != undefined &&
      otpsendres.SignupotpsendData.data != undefined
    ) {
      console.log(otpsendres.SignupotpsendData);
      dispatch(otpid(otpsendres.SignupotpsendData.data.id));
      props.popupalert("true");
      props.popuptext("OTP Sent Successfully");
      setTimeout(() => {
        props.popupalert("false");
      }, 2000);

      setotpscreen(true);

      dispatch(getSignupotpsendEmptyAction());
    }
  }, [otpsendres]);

  const handleLoginPage = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  ///
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  console.log(otp);
  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    // Move to the next input
    if (value !== "" && index < 4) {
      inputRefs[index + 1].current.focus();
    }

    setOtp(newOtp);
    setUserRegisterDetails({
      ...userRegisterDetails,
      otp: newOtp.join(""),
    });
  };

  const handleBackspace = (index) => {
    const newOtp = [...otp];

    // Move to the previous input
    if (index > 0 && newOtp[index] === "") {
      inputRefs[index - 1].current.focus();
    }

    newOtp[index] = "";
    setOtp(newOtp);
    setUserRegisterDetails({
      ...userRegisterDetails,
      otp: newOtp.join(""),
    });
  };
  useEffect(() => {
    setUserRegisterDetails({
      ...userRegisterDetails,
      resume: profileUpload,
    });
  }, [profileUpload]);
  useEffect(() => {
    setUserRegisterDetails({
      ...userRegisterDetails,
      id: otpresid.payload,
    });
  }, [otpresid]);

  const otpverify = (e) => {
    if (
      userRegisterDetails.otp != undefined &&
      userRegisterDetails.otp != "" &&
      userRegisterDetails.otp.length == 5 &&
      userRegisterDetails.resume != ""
    ) {
      formData.append("first_name", userRegisterDetails.first_name);
      formData.append("last_name", userRegisterDetails.last_name);
      formData.append("email", userRegisterDetails.email);
      formData.append("password", userRegisterDetails.password);
      formData.append("contact_no", userRegisterDetails.contact_no);
      formData.append("role", userRegisterDetails.role);
      formData.append("company_name", userRegisterDetails.company_name);
      formData.append("otp", userRegisterDetails.otp);
      formData.append("resume", profileUpload[0]);
      formData.append("id", otpresid.payload);

      dispatch(
        getOtpVerifyAction({
          data: formData,
        })
      );
    } else {
      console.log(userRegisterDetails);
      alert("Enter Otp");
    }
  };

  useEffect(() => {
    console.log(otpverifyres.OtpVerifyData);
    if (
      otpverifyres.OtpVerifyData != undefined &&
      otpverifyres.OtpVerifyData.status != undefined &&
      otpverifyres.OtpVerifyData.status.code == 201
    ) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${otpverifyres.OtpVerifyData.status.message}`,
        showConfirmButton: false,
        timer: 1500,
      }).then((result) => {
        dispatch(getOtpVerifyEmptyAction());
        navigate("/");
      });
    }
  }, [otpverifyres]);

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
                <div className="label ">Upload Profile {"  "}</div>

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

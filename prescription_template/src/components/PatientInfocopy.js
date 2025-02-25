import { useRef, useState } from "react";
import "../css/styles.css";
function PatientInfo() {
  const [show, setshow] = useState(false);
  const Content = useRef();
  const [valueChange, setvalueChange] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for select elements
    const selectedValue = e.target.tagName === "SELECT" ? e.target.value : value;

    setvalueChange({ ...valueChange, [name]: selectedValue });
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="" ref={Content} style={{ padding: "40px" }} id="patientInfo1">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {/* Patient ID */}
          <div>
            <h3 style={{}}>Patient ID:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="patientId1"
              style={{
                width: "200px",
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.patientId1}
            </span>
          </div>

          {/* Patient Name */}
          <div>
            <h3 style={{}}>Patient Name:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="patientName1"
              style={{
                width: "400px",
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.patientName1}
            </span>
          </div>

          {/* Gender */}
          <div>
            <h3 style={{}}>Gender:</h3>
            <select
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="gender1"
              style={{
                width: "200px",
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
              }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.gender1}</span>
          </div>

          {/* Blood Group */}
          <div>
            <h3 style={{}}>Blood Group:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="bloodGroup1"
              style={{
                width: "200px",
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.bloodGroup1}
            </span>
          </div>
        </div>
      </div>

      <div className="" ref={Content} style={{ padding: "40px" }} id="patientInfo2">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {/* Patient ID and Couple ID (Side by side) */}
          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <h3 style={{}}>Patient ID:</h3>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="patientId2"
                style={{
                  width: "200px", // Adjust the width as needed
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
            </div>
          </div>

          {/* Patient Name */}
          <div>
            <h3 style={{}}>Patient Name:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="patientName2"
              style={{
                width: "400px",
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
              }}
            />
          </div>

          {/* Gender and Blood Group (Side by side) */}
          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <h3 style={{}}>Gender:</h3>
              <select
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="gender2"
                style={{
                  width: "200px", // Adjust the width as needed
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <h3 style={{}}>Blood Group:</h3>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="bloodGroup2"
                style={{
                  width: "200px", // Adjust the width as needed
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientInfo;

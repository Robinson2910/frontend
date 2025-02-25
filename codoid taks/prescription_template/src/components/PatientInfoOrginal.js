import "../css/styles.css";
function PatientInfo({ show, valueChange, handleChange }) {
  return (
    <div
      style={
        show ? { display: "flex", alignItems: "center" } : { display: "flex", alignItems: "center" }
      }
    >
      <div className="" style={{ width: "100%" }} id="patientInfo1">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "10px",
            width: "45%",
            padding: "5%",
          }}
        >
          {/* Patient ID and Couple ID (Side by side) */}
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h3 style={{}}>Couple ID:</h3>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="coupleId"
                style={{
                  width: "200px",
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.coupleId}
              </span>
            </div>
          </div>

          {/* Patient Name */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <h3 style={{}}>Patient Name:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="patientName1"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.patientName1}
            </span>
          </div>

          {/* Gender and Blood Group (Side by side) */}
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                <option value="" disabled selected>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.gender1}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3 style={{}}>Age:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="age1"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "100px", // Adjust the width as needed
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.age1}</span>
          </div>
        </div>
      </div>

      <div className="" style={{ width: "100%" }} id="patientInfo2">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "10px",
            width: "45%",
            padding: "5%",
          }}
        >
          {/* Patient ID and Couple ID (Side by side) */}
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h3 style={{}}>Patient ID:</h3>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="patientId2"
                style={{
                  width: "200px",
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.patientId2}
              </span>
            </div>
          </div>

          {/* Patient Name */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3 style={{}}>Patient Name:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="patientName2"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.patientName2}
            </span>
          </div>

          {/* Gender and Blood Group (Side by side) */}
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h3 style={{}}>Gender:</h3>
              <select
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="gender2"
                style={{
                  width: "200px",
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              >
                <option value="" disabled selected>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.gender2}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h3 style={{}}>Blood Group:</h3>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="bloodGroup2"
                style={{
                  width: "200px",
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.bloodGroup2}
              </span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3 style={{}}>Age:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="age1"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "100px", // Adjust the width as needed
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.age1}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientInfo;

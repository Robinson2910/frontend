import { useState } from "react";
import "./css/styles.css";

function App() {
  const [show, setshow] = useState(false);

  const [valueChange, setvalueChange] = useState({
    gender1: "Male",
    gender2: "Male",
    bloodGroup1: "A+",
    bloodGroup2: "A+",
    collectionDate: "",
    resultDate: "",
  });
  const handleChange = (e) => {
    setvalueChange({ ...valueChange, [e.target.name]: e.target.value });
  };
  return (
    // Patient Info
    <div style={{}}>
      <>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "start",
            gap: "16px",
            overflowX: "hidden",
            maxWidth: "97%",
            margin: "0 auto",
          }}
        >
          <div className="" style={{ width: "100%" }} id="patientInfo1">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "10px",
                backgroundColor: "#f7f7f7 ",
                borderRadius: "6px",
                padding: "16px 8px 16px 8px",
              }}
            >
              {/* Patient ID and Couple ID (Side by side) */}
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "112px 16px 176px",
                    alignItems: "center ",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Patient ID</span>
                  <span style={{ fontWeight: 600 }}>: </span>
                  <input
                    type="text"
                    className={`createTime ${show ? "hide" : "show"}`}
                    onChange={(e) => handleChange(e)}
                    name="patientId1"
                    style={{
                      border: "1px solid #ddd",
                      outline: "none",
                      padding: "10px",
                    }}
                  />
                  <span className={`input ${!show ? "hide" : "show"}`}>
                    &nbsp;{valueChange.patientId1}
                  </span>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "64px 16px 176px",
                    alignItems: "center ",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Couple ID</span>
                  <span style={{ fontWeight: 600 }}>: </span>
                  <input
                    type="text"
                    className={`createTime ${show ? "hide" : "show"}`}
                    onChange={(e) => handleChange(e)}
                    name="coupleId"
                    style={{
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
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "112px 16px 176px",
                  alignItems: "center ",
                }}
              >
                <span style={{ fontWeight: 600 }}>Patient Name</span>
                <span style={{ fontWeight: 600 }}>: </span>
                <input
                  type="text"
                  className={`createTime ${show ? "hide" : "show"}`}
                  onChange={(e) => handleChange(e)}
                  name="patientName1"
                  style={{
                    border: "1px solid #ddd",
                    outline: "none",
                    padding: "10px",
                  }}
                />
                <span className={`input ${!show ? "hide" : "show"}`}>
                  &nbsp;{valueChange.patientName1}
                </span>
              </div>

              {/* Gender and Blood Group (Side by side) */}
              <div style={{ display: "flex", gap: "16px" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "112px 16px 176px",
                    alignItems: "center ",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Gender</span>
                  <span style={{ fontWeight: 600 }}>: </span>
                  <select
                    className={`createTime ${show ? "hide" : "show"}`}
                    onChange={(e) => handleChange(e)}
                    name="gender1"
                    style={{
                      border: "1px solid #ddd",
                      outline: "none",
                      padding: "10px",
                    }}
                  >
                    <option value="" disabled selected>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                    <option value="Decline to State">Decline to State</option>
                  </select>
                  <span className={`input ${!show ? "hide" : "show"}`}>
                    &nbsp;{valueChange.gender1}
                  </span>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "64px 16px 176px",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Blood Group</span>
                  <span style={{ fontWeight: 600 }}>: </span>
                  <select
                    className={`createTime ${show ? "hide" : "show"}`}
                    onChange={(e) => handleChange(e)}
                    name="bloodGroup1"
                    style={{
                      border: "1px solid #ddd",
                      outline: "none",
                      padding: "10px",
                    }}
                  >
                    <option value="" disabled selected>
                      Select Blood Group
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  <span className={`input ${!show ? "hide" : "show"}`}>
                    &nbsp;{valueChange.bloodGroup1}
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "112px 16px 176px",
                  alignItems: "center ",
                }}
              >
                <span style={{ fontWeight: 600 }}>Age</span>
                <span style={{ fontWeight: 600 }}>: </span>
                <input
                  type="text"
                  className={`createTime ${show ? "hide" : "show"}`}
                  onChange={(e) => handleChange(e)}
                  name="age1"
                  style={{
                    border: "1px solid #ddd",
                    outline: "none",
                    padding: "10px",
                  }}
                />
                <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.age1}</span>
              </div>
            </div>
          </div>

          <div
            className=""
            style={{ width: "100%", height: "100%", backgroundColor: "#f7f7f7" }}
            id="patientInfo2"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "10px",

                borderRadius: "6px",
                padding: "16px 8px",
              }}
            >
              {/* Patient ID and Couple ID (Side by side) */}
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "112px 16px 176px",
                    alignItems: "center ",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Patient ID</span>
                  <span style={{ fontWeight: 600 }}>: </span>

                  <input
                    type="text"
                    className={`createTime ${show ? "hide" : "show"}`}
                    onChange={(e) => handleChange(e)}
                    name="patientId2"
                    style={{
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
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "112px 16px 176px",
                  alignItems: "center ",
                }}
              >
                <span style={{ fontWeight: 600 }}>Patient Name</span>
                <span style={{ fontWeight: 600 }}>: </span>
                <input
                  type="text"
                  className={`createTime ${show ? "hide" : "show"}`}
                  onChange={(e) => handleChange(e)}
                  name="patientName2"
                  style={{
                    border: "1px solid #ddd",
                    outline: "none",
                    padding: "10px",
                  }}
                />
                <span className={`input ${!show ? "hide" : "show"}`}>
                  &nbsp;{valueChange.patientName2}
                </span>
              </div>

              {/* Gender and Blood Group (Side by side) */}
              <div style={{ display: "flex", gap: "16px" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "112px 16px 136px",
                    alignItems: "center ",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Gender</span>
                  <span style={{ fontWeight: 600 }}>: </span>
                  <select
                    className={`createTime ${show ? "hide" : "show"}`}
                    onChange={(e) => handleChange(e)}
                    name="gender2"
                    style={{
                      border: "1px solid #ddd",
                      outline: "none",
                      padding: "10px",
                    }}
                  >
                    <option value="" disabled selected>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                    <option value="Decline to State">Decline to State</option>
                  </select>
                  <span className={`input ${!show ? "hide" : "show"}`}>
                    &nbsp;{valueChange.gender2}
                  </span>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "64px 16px 176px",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Blood Group</span>
                  <span style={{ fontWeight: 600 }}>: </span>
                  <select
                    className={`createTime ${show ? "hide" : "show"}`}
                    onChange={(e) => handleChange(e)}
                    name="bloodGroup2"
                    style={{
                      border: "1px solid #ddd",
                      outline: "none",
                      padding: "10px",
                    }}
                  >
                    <option value="" disabled selected>
                      Select Blood Group
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  <span className={`input ${!show ? "hide" : "show"}`}>
                    &nbsp;{valueChange.bloodGroup2}
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "112px 16px 176px",
                  alignItems: "center ",
                }}
              >
                <span style={{ fontWeight: 600 }}>Age</span>
                <span style={{ fontWeight: 600 }}>: </span>
                <input
                  type="text"
                  className={`createTime ${show ? "hide" : "show"}`}
                  onChange={(e) => handleChange(e)}
                  name="age2"
                  style={{
                    border: "1px solid #ddd",
                    outline: "none",
                    padding: "10px",
                  }}
                />
                <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.age2}</span>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "start",
            gap: "32px",
            overflowX: "hidden",
            maxWidth: "97%",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "10px",
              padding: "16px 8px 16px 8px",
            }}
          >
            {/* Semen Origin */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "112px 16px 176px",
                alignItems: "center ",
              }}
            >
              <span style={{ fontWeight: 600 }}>Semen Origin</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="semenOrigin"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.semenOrigin}
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "10px",
              padding: "16px 8px 16px 8px",
            }}
          >
            {/* Request Dr */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "112px 16px 176px",
                alignItems: "center ",
              }}
            >
              <span style={{ fontWeight: 600 }}>Request Dr</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="requestDr"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.requestDr}
              </span>
            </div>

            {/* Collection Date */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "112px 16px 176px",
                alignItems: "center ",
              }}
            >
              <span style={{ fontWeight: 600 }}>Collection Date</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="date"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="collectionDate"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.collectionDate}
              </span>
            </div>

            {/* Result Date */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "112px 16px 176px",
                alignItems: "center ",
              }}
            >
              <span style={{ fontWeight: 600 }}>Result Date</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="date"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="resultDate"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.resultDate}
              </span>
            </div>
          </div>
        </div>
      </>
      {/* Spermiogram */}
      <div style={{ maxWidth: "97%", margin: "0 auto" }}>
        {/* <h2 style={{ textAlign: "center" }}>Spermiogram</h2>
      <hr></hr> */}
        <h2
          style={{
            textAlign: "center",

            backgroundColor: "#f7f7f7",
            padding: "16px 8px 16px 8px",
          }}
        >
          Spermiogram
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "start",
            gap: "32px",
            overflowX: "hidden",
            maxWidth: "97%",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "10px",
              padding: "16px 8px 16px 8px",
            }}
          >
            {/* Request */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "152px 16px 176px",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 600 }}>Request</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="request"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.request}
              </span>
            </div>

            {/* Collection Type */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "152px 16px 176px",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 600 }}>Collection Type</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="collectionType"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.collectionType}
              </span>
            </div>

            {/* Collection Method */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "152px 16px 176px",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 600 }}>Collection Method</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="collectionMethod"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.collectionMethod}
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "10px",
              padding: "16px 8px 16px 8px",
            }}
          >
            {/* Abstinence */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "152px 16px 176px",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 600 }}>Abstinence</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="abstinence"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.abstinence}
              </span>
            </div>

            {/* Medication */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "152px 16px 176px",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 600 }}>Medication</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="medication"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.medication}
              </span>
            </div>

            {/* Collection Difficulty */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "152px 16px 176px",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 600 }}>Collection Difficulty</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="collectionDifficulty"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.collectionDifficulty}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* macroscopic analysis */}
      <div style={{ maxWidth: "97%", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",

            backgroundColor: "#f7f7f7",
            padding: "16px 8px 16px 8px",
          }}
        >
          Macroscopic Analysis
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "start",
            gap: "32px",
            overflowX: "hidden",
            maxWidth: "97%",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "10px",
              padding: "16px 8px 16px 8px",
            }}
          >
            {/* pH */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "176px 16px 240px 64px",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: 600 }}>pH</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="pH"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.pH}</span>
              <span>&gt;=7.2</span>
            </div>

            {/* Time of Collection */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "176px 16px 176px",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: 600 }}>Time of Collection</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="timeOfCollection"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.timeOfCollection}
              </span>
            </div>

            {/* Time of Examination */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "176px 16px 176px",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: 600 }}>Time of Examination</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="timeOfExamination"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.timeOfExamination}
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "10px",
              padding: "16px 8px 16px 8px",
            }}
          >
            {/* Appearance */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "152px 16px 176px",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 600 }}>Appearance</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="appearance"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.appearance}
              </span>
            </div>

            {/* Color */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "152px 16px 176px",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 600 }}>Color</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="color"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.color}</span>
            </div>

            {/* Homogenosity */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "152px 16px 176px",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 600 }}>Homogenosity</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="homogenosity"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.homogenosity}
              </span>
            </div>

            {/* Complete Sample */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "152px 16px 176px",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 600 }}>Complete Sample</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="completeSample"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.completeSample}
              </span>
            </div>

            {/* Liquefaction Time */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "152px 16px 176px",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 600 }}>Liquefaction Time</span>
              <span style={{ fontWeight: 600 }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="liquefactionTime"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.liquefactionTime}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "97%", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            backgroundColor: "#f7f7f7",
            padding: "16px 8px 16px 8px",
          }}
        >
          Microscopic Analysis
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "start",
            gap: "32px",
            overflowX: "hidden",
            maxWidth: "97%",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "10px",
              padding: "16px 8px 16px 8px",
            }}
          >
            {/* Volume */}
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "256px 16px 240px 64px",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Volume(ml)</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="volume"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />

              <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.volume}</span>
              <span> &gt;=1.5ml</span>
            </div>

            {/* Concentration */}
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "256px 16px 240px 64px",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Concentration (mill/ml)</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="concentration"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.concentration}
              </span>
              <span> &gt;=15</span>
            </div>

            {/* Total */}
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "256px 16px 240px 64px",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Total (mill/ejaculate)</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="total"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.total}</span>
              <span> &gt;=39</span>
            </div>

            {/* Progressive Motility */}
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "256px 16px 240px 64px",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Progressive Motility (%)</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="progressiveMotility"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.progressiveMotility}
              </span>
              <span> &gt;=32%</span>
            </div>

            {/* Non-Progressive Motile */}
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "256px 16px 240px ",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Non-Progressive Motile (%)</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="nonProgressiveMotile"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.nonProgressiveMotile}
              </span>
            </div>

            {/* Immotile */}
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "256px 16px 240px ",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Immotile (%)</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="immotile"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.immotile}
              </span>
            </div>

            {/* Total Motile Sperm Count */}
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "256px 16px 240px ",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Total Motile Sperm Count(TMSC)</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="totalMotileSpermCount"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.totalMotileSpermCount}
              </span>
            </div>

            {/* Method */}
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "256px 16px 240px ",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Method</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="method"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.method}</span>
            </div>

            {/* Immature Forms */}
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "256px 16px 240px ",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Immature Forms</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="immatureForms"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.immatureForms}
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "10px",
              padding: "16px 8px 16px 8px",
            }}
          >
            {/* Normal */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "144px 16px 240px 64px",
                alignItems: "center ",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Normal</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="normal"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.normal}</span>
              <span>&gt;=4%</span>
            </div>

            {/* Abnormal */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "144px 16px 240px",
                alignItems: "center ",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Abnormal</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="abnormal"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.abnormal}
              </span>
            </div>

            {/* Head Defects */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "144px 16px 240px",
                alignItems: "center ",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Head Defects</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="headDefects"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.headDefects}
              </span>
            </div>

            {/* Midpiece Defects */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "144px 16px 240px",
                alignItems: "center ",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Midpiece Defects</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="midpieceDefects"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.midpieceDefects}
              </span>
            </div>

            {/* Tail Defects */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "144px 16px 240px",
                alignItems: "center ",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Tail Defects</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="tailDefects"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.tailDefects}
              </span>
            </div>

            {/* Vitality */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "144px 16px 240px",
                alignItems: "center ",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Vitality (%)</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="vitality"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.vitality}
              </span>
            </div>

            {/* Agglutination */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "144px 16px 240px 64px",
                alignItems: "center ",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Agglutination</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="agglutination"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.agglutination}
              </span>
              <span>&gt;=58%</span>
            </div>

            {/* Debris */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "144px 16px 240px",
                alignItems: "center ",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Debris</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="debris"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.debris}</span>
            </div>
          </div>
        </div>
        <div style={{ overflowX: "hidden", maxWidth: "97%", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "10px",
              padding: "16px 8px 16px 8px",
            }}
          >
            {/* Leucocytes */}

            <div
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "256px 16px 240px 200px",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Leucocytes </span>
              <span style={{ fontWeight: "600" }}>:</span>

              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="leucocytes"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.leucocytes}
              </span>
              <span>% &lt; 1 mill/ml or 20/field </span>
            </div>
            {/* Diagnosis */}
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "256px 16px 240px ",
                gap: "10px",
              }}
            >
              <span style={{ fontWeight: "600" }}>Diagnosis</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="diagnosis"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.diagnosis}
              </span>
            </div>
            {/* Observations */}
            {/* <div
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "256px 16px 1fr",
                gap: "10px",
                width: "100%",
              }}
            >
              <h3  style={{ fontWeight: "600" }}>Observations</h3>
              <h3  style={{ fontWeight: "600" }}>:</h3>
              <input
                type="text"
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="observations"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                  height: "192px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.observations}
              </span>
            </div> */}
            <div
              style={{
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "256px 16px 1fr",
                gap: "10px",
                width: "100%",
              }}
            >
              <span style={{ fontWeight: "600" }}>Observations</span>
              <span style={{ fontWeight: "600" }}>:</span>
              <textarea
                className={`createTime ${show ? "hide" : "show"}`}
                onChange={(e) => handleChange(e)}
                name="observations"
                style={{
                  border: "1px solid #ddd",
                  outline: "none",
                  padding: "10px",
                  height: "96px",
                }}
              />
              <span className={`input ${!show ? "hide" : "show"}`}>
                &nbsp;{valueChange.observations}
              </span>
            </div>
          </div>
        </div>
        <div style={{ overflowX: "hidden", maxWidth: "97%", margin: "64px auto 32px auto" }}>
          <div
            style={{
              padding: "16px 8px 16px 8px",
            }}
          >
            <span
              style={{
                marginLeft: "80%",
                display: "block",
                marginBottom: "16px",
                fontWeight: "600",
              }}
            >
              Andrologist Signature
            </span>
            <span style={{ display: "block", marginBottom: "16px" }}>
              Percentage respect to total number of abnormal spermatoza
            </span>
            <span style={{ display: "block" }}>
              reference values 17-01-2011: pursuant to the information published by WHO in the Human
              Reproduction Update, Vol.16, No3 pp-245 , 2010
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

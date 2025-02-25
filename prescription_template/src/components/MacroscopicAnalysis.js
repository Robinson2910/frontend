import React from "react";

function MacroscopicAnalysis({ show, valueChange, handleChange }) {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Macroscopic Analysis</h2>
      <hr></hr>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "start" }}>
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
          {/* pH */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>pH:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="pH"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.pH}</span>
          </div>

          {/* Time of Collection */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Time of Collection:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="timeOfCollection"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.timeOfCollection}
            </span>
          </div>

          {/* Time of Examination */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Time of Examination:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="timeOfExamination"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
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
            width: "45%",
            padding: "5%",
          }}
        >
          {/* Appearance */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Appearance:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="appearance"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.appearance}
            </span>
          </div>

          {/* Color */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Color:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="color"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.color}</span>
          </div>

          {/* Homogenosity */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Homogenosity:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="homogenosity"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.homogenosity}
            </span>
          </div>

          {/* Complete Sample */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Complete Sample:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="completeSample"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.completeSample}
            </span>
          </div>

          {/* Liquefaction Time */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Liquefaction Time:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="liquefactionTime"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.liquefactionTime}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MacroscopicAnalysis;

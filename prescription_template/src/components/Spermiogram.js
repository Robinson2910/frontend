function Spermiogram({ show, valueChange, handleChange }) {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Spermiogram</h2>
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
          {/* Request */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3 style={{}}>Request:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="request"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.request}</span>
          </div>

          {/* Collection Type */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3 style={{}}>Collection Type:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="collectionType"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.collectionType}
            </span>
          </div>

          {/* Collection Method */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3 style={{}}>Collection Method:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="collectionMethod"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
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
            width: "45%",
            padding: "5%",
          }}
        >
          {/* Abstinence */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3 style={{}}>Abstinence:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="abstinence"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.abstinence}
            </span>
          </div>

          {/* Medication */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3 style={{}}>Medication:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="medication"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.medication}
            </span>
          </div>

          {/* Collection */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3 style={{}}>Collection Difficulty:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="collectionDifficulty"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.collectionDifficulty}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Spermiogram;

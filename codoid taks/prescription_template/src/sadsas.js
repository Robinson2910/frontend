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
          <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.patientId1}</span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "112px 16px 160px",
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
          <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.coupleId}</span>
        </div>
      </div>

      {/* Patient Name */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "112px 16px 200px",
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
        <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.patientName1}</span>
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
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.gender1}</span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "112px 16px 160px",
            alignItems: "center ",
          }}
        >
          <span style={{ fontWeight: 600 }}>Blood Group</span>
          <span style={{ fontWeight: 600 }}>: </span>
          <input
            type="text"
            className={`createTime ${show ? "hide" : "show"}`}
            onChange={(e) => handleChange(e)}
            name="bloodGroup1"
            style={{
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

  <div className="" style={{ width: "100%" }} id="patientInfo2">
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "10px",
        backgroundColor: "#f7f7f7",
        borderRadius: "6px",
        padding: "16px 0 16px 8px",
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
          <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.patientId2}</span>
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
        <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.patientName2}</span>
      </div>

      {/* Gender and Blood Group (Side by side) */}
      <div style={{ display: "flex", gap: "16px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "112px 16px 96px",
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
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.gender2}</span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "112px 16px 160px",
            alignItems: "center ",
          }}
        >
          <span style={{ fontWeight: 600 }}>Blood Group</span>
          <span style={{ fontWeight: 600 }}>: </span>
          <input
            type="text"
            className={`createTime ${show ? "hide" : "show"}`}
            onChange={(e) => handleChange(e)}
            name="bloodGroup2"
            style={{
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
</div>;

// spermiogram

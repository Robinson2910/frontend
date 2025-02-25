import React from "react";

function MicroscopicAnalysis({ show, valueChange, handleChange }) {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Microscopic Analysis</h2>
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
          {/* Volume */}
          <div
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "10px",
            }}
          >
            <h3>Volume(ml)</h3>
            <h3>:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="volume"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />

            <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.volume}</span>
            <span style={{ marginLeft: "30px" }}> &gt;=1.5ml</span>
          </div>

          {/* Concentration */}
          <div
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "10px",
            }}
          >
            <h3>Concentration (mill/ml)</h3>
            <h3>:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="concentration"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.concentration}
            </span>
            <span style={{ marginLeft: "30px" }}> &gt;=15</span>
          </div>

          {/* Total */}
          <div
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "10px",
            }}
          >
            <h3>Total (mill/ejaculate)</h3>
            <h3>:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="total"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.total}</span>
            <span style={{ marginLeft: "30px" }}> &gt;=39</span>
          </div>

          {/* Progressive Motility */}
          <div
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "10px",
            }}
          >
            <h3>Progressive Motility (%)</h3>
            <h3>:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="progressiveMotility"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.progressiveMotility}
            </span>
            <span style={{ marginLeft: "30px" }}> &gt;=32%</span>
          </div>

          {/* Non-Progressive Motile */}
          <div
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "2fr 0.5fr 1.5fr ",
              gap: "10px",
            }}
          >
            <h3>Non-Progressive Motile (%)</h3>
            <h3>:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="nonProgressiveMotile"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
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
              gridTemplateColumns: "2fr 1fr 1fr ",
              gap: "10px",
            }}
          >
            <h3>Immotile (%)</h3>
            <h3>:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="immotile"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.immotile}</span>
          </div>

          {/* Total Motile Sperm Count */}
          <div
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "2fr 1fr 1fr ",
              gap: "10px",
            }}
          >
            <h3>Total Motile Sperm Count(TMSC)</h3>
            <h3>:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="totalMotileSpermCount"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
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
              gridTemplateColumns: "2fr 1fr 1fr ",
              gap: "10px",
            }}
          >
            <h3>Method</h3>
            <h3>:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="method"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.method}</span>
          </div>

          {/* Immature Forms */}
          <div
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "2fr 1fr 1fr ",
              gap: "10px",
            }}
          >
            <h3>Immature Forms</h3>
            <h3>:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="immatureForms"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.immatureForms}
            </span>
          </div>

          {/* Leucocytes */}
          <div
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "100px 200px 200px ",
              gap: "10px",
            }}
          >
            <h3>Leucocytes :</h3>

            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="leucocytes"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.leucocytes}
            </span>
            <span style={{ marginLeft: "30px" }}>% &gt;1 mill/ml or 20/field </span>
          </div>
          {/* Diagnosis */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Diagnosis:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="diagnosis"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.diagnosis}
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
          {/* Normal */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Normal:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="normal"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.normal}</span>
          </div>

          {/* Abnormal */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Abnormal:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="abnormal"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.abnormal}</span>
          </div>

          {/* Head Defects */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Head Defects:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="headDefects"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.headDefects}
            </span>
          </div>

          {/* Midpiece Defects */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Midpiece Defects:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="midpieceDefects"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.midpieceDefects}
            </span>
          </div>

          {/* Tail Defects */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Tail Defects:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="tailDefects"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.tailDefects}
            </span>
          </div>

          {/* Vitality */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Vitality:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="vitality"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.vitality}</span>
          </div>

          {/* Agglutination */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Agglutination:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="agglutination"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>
              &nbsp;{valueChange.agglutination}
            </span>
          </div>

          {/* Debris */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>Debris:</h3>
            <input
              type="text"
              className={`createTime ${show ? "hide" : "show"}`}
              onChange={(e) => handleChange(e)}
              name="debris"
              style={{
                border: "1px solid #ddd",
                outline: "none",
                padding: "10px",
                width: "200px",
              }}
            />
            <span className={`input ${!show ? "hide" : "show"}`}>&nbsp;{valueChange.debris}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MicroscopicAnalysis;

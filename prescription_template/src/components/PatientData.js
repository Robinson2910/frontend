// PatientData.js
import React from "react";
import InputField from "./InputField";

function PatientData({ title, show, valueChange, handleChange, namePrefix }) {
  return (
    <div style={{ width: "100%" }} id={`patientInfo${namePrefix}`}>
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
          <InputField
            label="Patient ID"
            type="text"
            show={show}
            handleChange={handleChange}
            name={`patientId${namePrefix}`}
            value={valueChange[`patientId${namePrefix}`]}
            width="200px"
          />
          <InputField
            label="Couple ID"
            type="text"
            show={show}
            handleChange={handleChange}
            name={`coupleId${namePrefix}`}
            value={valueChange[`coupleId${namePrefix}`]}
            width="200px"
          />
        </div>
        {/* Patient Name */}
        <InputField
          label="Patient Name"
          type="text"
          show={show}
          handleChange={handleChange}
          name={`patientName${namePrefix}`}
          value={valueChange[`patientName${namePrefix}`]}
          width="200px"
        />
        {/* Gender and Blood Group (Side by side) */}
        <div style={{ display: "flex", gap: "20px" }}>
          <InputField
            label="Gender"
            type="select"
            show={show}
            handleChange={handleChange}
            name={`gender${namePrefix}`}
            value={valueChange[`gender${namePrefix}`]}
            options={["Select Gender", "Male", "Female"]}
            width="200px"
          />
          <InputField
            label="Blood Group"
            type="text"
            show={show}
            handleChange={handleChange}
            name={`bloodGroup${namePrefix}`}
            value={valueChange[`bloodGroup${namePrefix}`]}
            width="200px"
          />
        </div>
        <InputField
          label="Age"
          type="text"
          show={show}
          handleChange={handleChange}
          name={`age${namePrefix}`}
          value={valueChange[`age${namePrefix}`]}
          width="100px"
        />
      </div>
    </div>
  );
}

export default PatientData;

import { useState } from "react";
import PatientInfo from "./components/PatientInfo";
import Spermiogram from "./components/Spermiogram";
import MacroscopicAnalysis from "./components/MacroscopicAnalysis";
import MicroscopicAnalysis from "./components/MicroscopicAnalysis";

function App() {
  const [show, setshow] = useState(false);

  const [valueChange, setvalueChange] = useState({});
  const handleChange = (e) => {
    setvalueChange({ ...valueChange, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <PatientInfo show={show} valueChange={valueChange} handleChange={handleChange} />
      <Spermiogram show={show} valueChange={valueChange} handleChange={handleChange} />
      <MacroscopicAnalysis show={show} valueChange={valueChange} handleChange={handleChange} />
      <MicroscopicAnalysis show={show} valueChange={valueChange} handleChange={handleChange} />
    </div>
  );
}

export default App;

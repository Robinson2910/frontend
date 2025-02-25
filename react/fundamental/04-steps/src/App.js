import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}
function Steps() {
  // const step = 2;
  //create state variable

  let [step, setStep] = useState(1); //returns an array,first value is initialized value of state variable set to 1 and second value is a setter fn  which is used to update the state

  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ firstName: "jonas" });
  // console.log(test.name);

  function handlePrevious() {
    // alert("Previous");
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    // alert("Next");
    if (step < 3) setStep((s) => s + 1);
    // test.name = "Robinson";
    // setTest({ firstName: "Rovinson" });
  }
  function handleClose() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <button
        className="close"
        onClick={handleClose}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div
              className={
                step == 1 ? "active" : ""
              }
            >
              1
            </div>
            <div
              className={
                step == 2 ? "active" : ""
              }
            >
              2
            </div>
            <div
              className={
                step == 3 ? "active" : ""
              }
            >
              3
            </div>
          </div>
          <p className="message">
            {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{
                backgroundColor: "#7950F2",
                color: "#fff",
              }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{
                backgroundColor: "#7950F2",
                color: "#fff",
              }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

//## challenge Date Counter
// import { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const currentDate = new Date(); // Create a Date object representing the current date and time

//   return <Counter />;

//   function Counter() {
//     const currentDate = new Date();
//     const [step, setStep] = useState(1);
//     const [count, setCount] = useState(0);
//     currentDate.setDate(currentDate.getDate() + count);

//     function handleMinus() {
//       if (step > 1) setStep((step) => step - 1);
//     }
//     function handlePlus() {
//       setStep((step) => step + this);
//     }
//     function handleMinusCount() {
//       setCount((count) => count - this);
//     }
//     function handlePlusCount() {
//       setCount((count) => count + this);
//     }
//     return (
//       <div>
//         <div>
//           <button onClick={handleMinus.bind(1)}>-</button>
//           <span> Step:{step} </span>
//           <button onClick={handlePlus.bind(1)}>+</button>
//         </div>
//         <div>
//           <button onClick={handleMinusCount.bind(step)}>-</button>
//           <span> Count:{count} </span>
//           <button onClick={handlePlusCount.bind(step)}>+</button>
//         </div>

//         <p>{`${
//           count !== 0
//             ? Math.abs(count) + `${count > 0 ? " days from" : " days ago"}`
//             : ""
//         }${
//           count === 0 ? "Today is" : " today is"
//         } ${currentDate.toDateString()}`}</p>
//       </div>
//     );
//   }
// }

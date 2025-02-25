import { useState, useReducer } from "react";

function DateCounter() {
  // const [count, setCount] = useState(0);
  function reducer(state, action) {
    switch (action.type) {
      case "dec":
        return { ...state, count: state.count - state.step };
      case "inc":
        return { ...state, count: state.count + state.step };
      case "setCount":
        return { ...state, count: action.payload };
      case "setStep":
        return { ...state, step: action.payload };
      case "reset":
        return initialState;
      default:
        throw new Error("Unknown action");
    }
  }
  const initialState = { step: 1, count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, count } = state;
  // const [count, dispatch] = useReducer(reducer, 0);
  //dispatch is also used to set the state but it does it in a different way
  //so when dispatch is called ,the reducer function is called and the value passed in as argument becomes the argument
  //of the action in reducer fn and state is value of current state in reducer fn and the returned value of
  //reducer fn becomes the new value of state
  // const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    // dispatch(-1);
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input type="range" min="0" max="10" value={step} onChange={defineStep} />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;

// Use Cases for useReducer:

// Components with many state variables and state updates spread across multiple event handlers.
// Situations where multiple state updates need to occur simultaneously in response to the same event.
// Cases where updating one piece of state depends on one or more other pieces of state.
// In such scenarios, useReducer offers a more organized and manageable solution.
// Components of useReducer:

// The useReducer hook is introduced with two main components:

// A reducer function: Responsible for updating the state and housing all state updating logic, decoupling it from event handlers.
// Initial state: The initial state of the application's state, which can be a state object (often used) or a primitive value.
// Reducer Function:

// The reducer function is the core of useReducer, and it is described as a place to store the logic responsible for state updates.
// It takes two arguments: the current state and an action, and based on these, it returns the next state.
// It's essential to remember that state is immutable in React, meaning the reducer must return a new state and not modify the existing state.
// Actions:

// Actions are objects that describe how state should be updated.
// Typically, an action includes an action type and a payload, which contains input data.
// The reducer uses the action type and payload to determine how to create the next state.

// Dispatch Function:

// The useReducer hook returns a dispatch function, which is used to trigger state updates.
// Instead of using setState to update state, the dispatch function is used to send an action to the reducer.
// When an action is dispatched, the reducer processes it to compute the next state.
// Mechanism of useReducer:

// The video provides a step-by-step explanation of how useReducer works:
// In an event handler within a component, the dispatch function is called to dispatch an action to the reducer.
// The action contains information about how the state should be updated (action type and payload).
// The reducer uses the action and the current state to create a brand new state (next state).
// Updating the state triggers a re-render of the component instance.
// Comparison with useState:

// The video draws a comparison between useReducer and useState:
// useState is simpler and involves a setter function where you directly update the state with a new value.
// useReducer, while more complex to set up, offers advantages for managing complex state and related pieces of state.
// Bank Transaction Analogy:

// The video uses a helpful analogy of a bank transaction to clarify the concepts of dispatcher, reducer, action, and state:
// State is represented by the bank's vault, where relevant data (money) is stored and updated.
// The customer going to the bank and requesting money is the dispatcher, requesting a state update.
// The bank employee (person working at the bank) is the reducer, responsible for processing the request based on the action provided.
// The action is the request message, typically containing an action type (e.g., "withdraw") and a payload (data about the withdrawal).
// These in-depth notes provide a comprehensive understanding of the concepts and analogies presented in the video. If you have further questions or need clarification on specific points, please feel free to ask.

// Is this conversation helpful so far?

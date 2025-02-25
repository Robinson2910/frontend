import { createSlice } from "@reduxjs/toolkit";

//benegits
//automatically creates action creators from reducers
//no need to write switch cases
//state can be mutated
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + action.payload;
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    // requestLoan: {
    //   prepare(amount, purpose) {
    //     return {
    //       payload: { amount, purpose },
    //     };
    //   },
    //   reducer(state, action) {
    //     if (state.loan > 0) return;
    //     state.loan = action.payload.amount;
    //     state.loanPurpose = state.balance + action.payload.amount;
    //     state.balance = state.balance + action.payload.amount;
    //   },
    // },
    requestLoan(state, action) {
      if (state.loan > 0) return;
      state.loan = action.payload.amount;
      state.loanPurpose = state.balance + action.payload.amount;
      state.balance = state.balance + action.payload.amount;
    },
    payLoan(state, action) {
      state.loan = 0;
      state.loanPurpose = "";
      state.balance -= state.loan;
    },
  },
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer();
console.log(accountSlice);
// export default function accountReducer(state = initialState, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload, isLoading: false };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;

//       return {
//         ...state,
//         loan: action.payload.amount,
//         balance: state.balance + action.payload.amount,
//         loanPurpose: action.payload.purpose,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     case "account/convertingCurrency":
//       return {
//         ...state,
//         isLoading: true,
//       };

//     default:
//       return state;
//   }
//   // }
// }

// //action creators just return the actions
// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };
//   return function (dispatch, getState) {
//     //API call
//     dispatch({ type: "account/convertingCurrency" });
//     const host = "api.frankfurter.app";
//     fetch(`https://${host}/latest?${amount}=10&from=${currency}&to=USD`)
//       .then((resp) => resp.json())
//       .then((data) => {
//         dispatch({ type: "account/deposit", payload: data.rates.USD });
//       });
//     //dispatch the action
//   }; //so when it dispatched the action creator it will return function

//   //and when function is dispatched redux
//   //   And so when Redux sees that,

//   // it will know that that function is the thunk.

//   // And so it will then execute that function
// }

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }
// export function requestLoan(amount, purpose) {
//   return { type: "account/requestLoan", payload: { amount, purpose } };
// }
// export function payLoan() {
//   return { type: "account/payLoan" };
// }

//  NOTES

// Here are notes for the continuation of your code, which includes the `accountReducer` and action creators for the "account" feature:

// **`initialStateAccount`**:
// - `initialStateAccount` is an object that defines the initial state for the "account" feature.
// - It includes properties like `balance`, `loan`, and `loanPurpose`.

// **`accountReducer` Function**:
// - `accountReducer` is a Redux reducer function responsible for managing the state related to the "account" feature.
// - It takes the current state and an action as parameters.
// - It uses a `switch` statement to handle different action types and update the state accordingly.

// **Actions**:
// - Actions are objects that describe what should happen in the application.
// - Actions typically have a `type` property and may include additional data in the `payload`.

// **Action Types**:
// - Action types are typically defined as strings with a specific format, e.g., `"account/deposit"`, `"account/withdraw"`.
// - These action types are used to identify which action to perform in the reducer.

// **Action Creators**:
// - Action creators are functions that return action objects.
// - They encapsulate the logic for creating actions and provide a clean interface for dispatching actions.

// **`deposit` Action Creator**:
// - The `deposit` action creator returns an action object with a `type` of `"account/deposit"` and a `payload` of the deposited `amount`.
// - It performs a simple deposit if the currency is "USD."

// **Thunk Action Creator**:
// - In the `deposit` action creator, there's a conditional check for the currency. If the currency is not "USD," it returns a function.
// - This is a thunk action creator, which allows for asynchronous actions.
// - Thunks are used for actions that involve side effects like API calls.

// **`withdraw` Action Creator**:
// - The `withdraw` action creator returns an action object with a `type` of `"account/withdraw"` and a `payload` of the withdrawn `amount`.

// **`requestLoan` Action Creator**:
// - The `requestLoan` action creator returns an action object with a `type` of `"account/requestLoan"` and a `payload` containing the requested `amount` and `purpose`.

// **`payLoan` Action Creator**:
// - The `payLoan` action creator returns an action object with a `type` of `"account/payLoan"`.

// In summary, the continuation of your code includes the "accountReducer" function, which manages the state for the "account" feature,
// and action creators that define actions for deposit,
// withdrawal, loan requests, and loan repayments. It also introduces a thunk action creator for handling asynchronous logic
//  the currency is not "USD."
//  Thunks are used to perform side effects, such as making API calls, before dispatching actions.

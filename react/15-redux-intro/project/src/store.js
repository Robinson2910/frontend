import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;

//redux toolkit notes
// import { configureStore } from "@reduxjs/toolkit";

//using the above create a store and thus two slices of state will be created

//and in slice

//import { createSlice } from "@reduxjs/toolkit";

//using create slice

//create a slice

// createSlice is a function provided by the Redux Toolkit, which is a library that simplifies the management of state in a Redux-based application.
// Specifically, createSlice is used to create a "slice" of the Redux store, which typically includes both a reducer and a set of action creators.

// Here's what createSlice does:

// Reducer: It automatically generates a reducer function for your slice. This reducer will handle actions related to
//  the state managed by that slice. The reducer is a pure function that takes the current state and an action and
// returns the new state based on the action.

// Action Creators: It also generates action creators for the actions that can be dispatched to update the state managed by the slice.
//  These action creators are functions that produce action objects with a specific format, making it easier to dispatch actions.

// Action Types: It creates action types as string constants. These action types are used to match actions in the reducer,
// ensuring that the reducer knows how to respond to specific actions.

// export const { withdraw, requestLoan, payLoan } = accountSlice.actions;//action creators will be used along with dispatch to change the state in store
// // export default accountSlice.reducer;

//INSIDE THE COMPONENT

// import { useDispatch, useSelector } from "react-redux"; //importing use dispatch and use selector
// import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice"; //importing action creators

//  "useSelector" is a hook provided by the React-Redux library,
// and it's used to access the state stored in a Redux store within a React component.

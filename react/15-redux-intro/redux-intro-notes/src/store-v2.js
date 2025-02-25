import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// const rootReducer = combineReducers({ account: accountReducer, customer: customerReducer });
const rootReducer = combineReducers({ account: accountReducer, customer: customerReducer });
//createStore(reducer) returns a store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
//told the store we want to use thunk middleware

export default store;

// Redux Store:

// In Redux, a store is the central place where your application's state is stored.
// It allows you to access and update the application's state.

// Reducers:

// Reducers are pure functions that specify how the application's state changes in response to actions.
// Each reducer typically manages a specific slice of the application's state.

// dispatch Function:
// In Redux, the dispatch function is used to send an action to the store, which in turn triggers the state to be updated by the reducers.
// It is the primary method for interacting with the Redux store, allowing you to trigger changes in the application's state by dispatching actions.

// combineReducers Function:

// The combineReducers function is used to combine multiple reducers into a single root reducer.
// In your code, you're combining accountReducer and customerReducer into a single root reducer using the combineReducers function.
// Middleware:

// Middleware in Redux provides a way to extend the store's functionality.
// In your code, you're using the applyMiddleware function from Redux to apply the thunk middleware.
// Thunk Middleware:

// Thunk is a middleware that allows you to write asynchronous logic in your Redux actions.
// It enables you to dispatch functions, not just plain action objects.
// Thunk is often used for making asynchronous API calls or performing other side effects in Redux.
// createStore Function:

// The createStore function is used to create a Redux store.
// It takes the root reducer and optional middleware as arguments.
// Global State:

// ************

// The global state in your application will be structured based on the reducers you combine ************

// In your case, the global state will have two slices: account and customer, each managed by its respective reducer.
// Exporting the Store:

// You are exporting the Redux store at the end of the code to make it available for use in other parts of your application.
// In summary, the code you provided sets up a Redux store with two reducers (accountReducer and customerReducer) using the combineReducers function. It applies the thunk middleware to allow asynchronous actions. The resulting store is exported for use in other parts of your application. This setup is commonly used in Redux to manage the application's state and handle asynchronous actions.

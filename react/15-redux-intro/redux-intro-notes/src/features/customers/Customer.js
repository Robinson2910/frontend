import { useSelector } from "react-redux";

function Customer() {
  //takes a callback function
  // Now, this useSelector hook takes a callback function,

  // and this function takes as the single argument,

  // the entire Redux store.

  // So we usually call that store,

  // but then from that store,

  // we can simply get the data that we want.
  const customer = useSelector((store) => store.customer.fullName);
  //   is that this useSelector basically creates a subscription

  // to the store.

  // And so just like we are already used to,

  // whenever the store changes,

  // then this component that is subscribed

  // to that store will re-render.
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;

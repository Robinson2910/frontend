import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

//pizza data is stored in form of objects
const pizzaData = [
  {
    name: "Focaccia",
    ingredients:
      "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients:
      "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients:
      "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients:
      "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients:
      "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//presentation component header
//its a component consisting of just a header (semantics)
//inside it there's a heading(h1)
function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "48px",
  //   textTransform: "uppercase",
  // };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizaas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* wehen we place an array of components inside the javascript mode , those component will be rendered 
      in this case its an unorder list */}
      {numPizaas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine.6 creative
            dishes to choose from.All from our
            stone oven,all organic,all delicious
          </p>
          {/* list of pizzas render using js mode and array mapped to jsx  */}
          <ul className="pizzas">
            {pizzas.map((pizza, i) => (
              // unique key is passed for each of the componenet in this case its the index of the pizza
              <Pizza pizzaObj={pizza} key={i} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>
          We r still working on our menu.Please
          come back later :
        </p>
      )}

      {/* <Pizza
        name="Pizza spinaci ingredients"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price="10"
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms, and ricotta cheese"
        photoName="pizzas/funghi.jpg"
        price={12} //to pass in as a number
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    // template literal is actually js ,hence we use it inside js mode
    //if pizza is sold out we add a class so that its greyed out or else we dont add
    <div
      className={`pizza ${
        pizzaObj.soldOut ? "sold-out" : ""
      }`}
    >
      <img
        src={pizzaObj.photoName}
        alt="Pizza spinaci"
      />
      <div>
        <h3>{pizzaObj.name}</h3>

        <p>{pizzaObj.ingredients}</p>
        <p>
          {pizzaObj.soldOut
            ? "SOLD OUT"
            : Number(pizzaObj.price) + 3}
        </p>
      </div>
    </div>
  );
}

function Footer() {
  //gets the current data nd hours
  //and displays open or closed based on it
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 10;
  const closeHour = 22;
  const isOpen =
    hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("We're currently Open");
  // else alert("sorry we are closed");

  //&& operator shortcircuits when it is false or if  both are true it shortcircuit at the second element and second element is returned
  //conditional rendering using if else i.e with multiple returns of JSX
  // if (!isOpen)
  //   return (
  //     <p>
  //       We're happy to welcome you between {openHour}:00 and {closeHour}:00.
  //     </p>
  //   );
  return (
    <footer className="footer">
      {/* we r inside javascript mode and returning some more javascript ,basically inside js mode we can add in any js expressions(anything with value) */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between{" "}
          {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, `We're currently open`);
}
// since the jsx in footer component got bigger ,we extracted the jsx from it as a distinct component

//props obj is passed as an argument to each of the component but we can destructure it
function Order({ closeHour }) {
  return (
    <div className="order">
      <p>
        We're open until {closeHour}:00.Come visit
        us or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// root.render(R);
//wraPPING THE COMPONENT USING A REACT.STRICTMODE COMPONENET
// React.StrictMode is a component provided by React that is used during development to help identify potential problems in your application.
// It doesn't affect the production build of your application,
//  but it adds additional checks and warnings during development to catch common mistakes or potential issues early.

//in strict mode it each component is rendered twice
//react before 18

// React.render(<App />, document.getElementById("root"));

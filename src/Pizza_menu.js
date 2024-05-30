import "./App.css";
import React from "react";

const pizzaData = [
  {
    name: "Cheese Pizza",
    src: "./cheese-pizza.jpg",
    soldOut: false,
  },
  {
    name: "Pepperoni Pizza",
    src: "./pepperoni-pizza.jpg",
    soldOut: true,
  },
  {
    name: "Veg Pizza",
    src: "./veg-pizza.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      {pizzaData.map((pizza) => (
        <Pizza
          pizzaObj={pizza}
          name={pizza.name}
          src={pizza.src}
          soldOut={pizza.soldOut}
        />
      ))}
      <Developer />
    </div>
  );
}

function Pizza({ pizzaObj }) {
  const hour = new Date().getHours();
  const open = 10;
  const close = 22;
  // check the current hour and if it is between 12 and 22 then it displays the pizza menu if not it hides the menu
  const isOpen = hour >= open && hour <= close;

  //if (pizzaObj.soldOut) return null;
  return (
    <div className="Pizza-main">
      {isOpen ? (
        <div>
          <img
            src={pizzaObj.src}
            alt="cheese pizza"
            style={{ height: "300px", width: "400px" }}
          />
          <h4>{pizzaObj.name}</h4>
          <span>{pizzaObj.soldOut ? "SOLDOUT" : "Order Now"}</span>
        </div>
      ) : (
        <p>no items found</p>
      )}
    </div>
  );
}

function Header() {
  return (
    <div className="Header">
      <h1 style={{ color: "red" }}>Our Menu</h1>
    </div>
  );
}

function Developer() {
  return (
    <div className="Developer_Profile">
      <div>
        <img
          src="./pepperoni-pizza.jpg"
          alt="cheese pizza"
          style={{ height: "300px", width: "400px" }}
        />
      </div>

      <div className="Content">
        <h1>Jonas Walter </h1>
        <p>
          hi there jonas here please contact me for any development related
          tasks i will be very happy to assist you!
        </p>
      </div>

      <div className="Skills">
        <h5 className="list">React</h5>
        <h5 className="list">JavaScript</h5>
        <h5 className="list">JavaScript</h5>
        <h5 className="list">JavaScript</h5>
        <h5 className="list">JavaScript</h5>
      </div>
    </div>
  );
}
export default App;

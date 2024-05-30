import "./App.css";
import React, { useState } from "react";

const messages = ["first step", "second step", "third step"];
function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);
  function Previous() {
    if (step > 1) setStep(step - 1);
  }
  function Next() {
    if (step < 3) setStep(step + 1);
  }
  return (
    <>
      <button onClick={() => setOpen(!isOpen)}>x</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">{messages[step - 1]}</p>
          <div className="buttons">
            <button style={{ backgroundColor: "green" }} onClick={Previous}>
              Previous
            </button>
            <button style={{ backgroundColor: "green" }} onClick={Next}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

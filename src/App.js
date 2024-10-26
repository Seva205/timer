
import './App.css';



import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false); 

  useEffect(() => {
    let timer;
   
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false); 
    }
   
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const startTimer = () => {
    setTimeLeft(60);
    setIsActive(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Gerisayım sayğacı</h1>
      <p>{timeLeft > 0 ? `${timeLeft} seconds left` : "Vaxt bitdi!"}</p>
      <button onClick={startTimer} disabled={isActive}>
       Azalan
      </button>
    </div>
  );
}

export default CountdownTimer;

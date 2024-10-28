import "./App.css";

import React, { useState, useEffect } from "react";
import { Card } from "./components/card";

const array = [
  {
    imgUrl: "https://7gul.az/src/img/products/7gul-393474_3be3.jpeg",
    title: "Bouquet 014",
    price: "100 azn",
  },
  {
    imgUrl: "https://7gul.az/src/img/products/7gul-393474_3be3.jpeg",
    title: "Bouquet 014",
    price: "100 azn",
  },
  {
    imgUrl: "https://7gul.az/src/img/products/7gul-393474_3be3.jpeg",
    title: "Bouquet 014",
    price: "100 azn",
  },
  {
    imgUrl: "https://7gul.az/src/img/products/7gul-393474_3be3.jpeg",
    title: "Bouquet 014",
    price: "100 azn",
  },
];

function App() {
  const [visibleCard, setIsVisibleCard] = useState(false);
  const [price,setPrice] = useState(1000);
  const [title,setTitle] = useState('something');
  const [childItem,setChildItem] = useState('');



  const handleItem = (data)=>{
    console.log(data);
    setChildItem(data);
  }
  // const [timeLeft, setTimeLeft] = useState(60);
  // const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   let timer;

  //   if (isActive && timeLeft > 0) {
  //     timer = setInterval(() => {
  //       setTimeLeft((prevTime) => prevTime - 1);
  //     }, 1000);
  //   } else if (timeLeft === 0) {
  //     setIsActive(false);
  //   }

  //   return () => clearInterval(timer);
  // }, [isActive, timeLeft]);

  // const startTimer = () => {
  //   setTimeLeft(60);
  //   setIsActive(true);
  // };


  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex" }}>
        {/* {array.map(({ imgUrl, title, price }) => (
        <Card imgUrl={imgUrl} title={title} price={price} />
      ))} */}
        {/* {array.map((card) => (
          <Card  {...card} />
        ))} */}
        {visibleCard && (
          <Card
            imgUrl="https://7gul.az/src/img/products/7gul-393474_3be3.jpeg"
            title={title}
            price={price}
            handleItem={handleItem}
          />
        )}
        <button onClick={()=>setIsVisibleCard(true)}>Click me and visible card</button>
        <button onClick={()=>setPrice(2000)}>click me and change price</button>
        <button onClick={()=>setTitle('Ayxannnnnn')}>click me and change title</button>
        <button onClick={()=>setIsVisibleCard(false)}>Click me and remove card</button>
      </div>
      <p>{childItem}</p>
      {/* <Card /> */}  
      {/* <h1>Gerisayım sayğacı</h1>
      <p>{timeLeft > 0 ? `${timeLeft} seconds left` : "Vaxt bitdi!"}</p>
      <button onClick={startTimer} disabled={isActive}>
       Azalan
      </button> */}
    </div>
  );
}

export default App;

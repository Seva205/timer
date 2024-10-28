import "./index.css";
import React from 'react';

export const Card = ({ imgUrl, title,price ,handleItem}) => {
  const [inputValue,setInputValue]= React.useState('');

  console.log('1');
  console.log('4');

  React.useEffect(() => {
   console.log('2');
   handleItem(inputValue);
   return () => {
    console.log('unMount 3');
   }
  }, [inputValue]);


  React.useLayoutEffect(()=>{
    console.log('77');
  },[])







  return (
    <div className="wrapper col-3">
      <div className="wrapperImg">
        <img
          src={imgUrl}
          alt="gul image"
          width={100}
        />
      </div>
      <div className="wrapperCardDescription">
        <div className="decriptionTitle">{title}</div>
        <div className="price">{price}</div>
      </div>
      <div className="action">
        {/* <button onClick={handleItem}>meni al</button> */}
      </div>
      <input onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
    </div>
  );
};

import React from 'react'
import {useState} from 'react';
const UseStateDemo = () => {
    const [count,setCount]=useState(0);
    const incremnetCounter =()=>{  ///()=> incermetntCounter()
        setCount(count+1)
        console.log("cliccked");
    }
    const decrementCounter = () => {
        setCount((prevCount) => prevCount - 1);
    }
  return (
    <div >
      <button style={{fontSize:"15px"}} onClick={incremnetCounter} > +  </button>
        <span style={{fontSize:"20px"}}>{" "+ count +" "}</span>
      <button style={{fontSize:"15px"}} onClick={decrementCounter} > - </button>
    </div>
  )
}

export default UseStateDemo

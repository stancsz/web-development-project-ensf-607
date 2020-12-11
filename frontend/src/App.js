
import './App.css';
import { useState } from 'react';
import { isElementOfType } from 'react-dom/test-utils';

function App() {
 const[input,setInput]=useState(0)
  const [counter,setCounter]=useState(0)
  const decrement=()=>{
    if(counter>0)
    setCounter (counter-1)
    else
    setCounter (0)
  }
  const increment=()=>{
    if(counter<200)
    setCounter (counter+1)
    else
    setCounter (150)
  }
  const assign=()=>{
   if(!isNaN(input))
   {
    if(input>150)
  setCounter(150)
    else if(input<0)
    setCounter(0)
    else setCounter(input)}
    else setCounter(0)
    
  }
  return (
    <div className="App">
      <div className="text_field">
    
      <input type="text" onChange= {(e)=>{
        setInput(parseInt(e.target.value))
      }}
        placeholder="Put number"   id="txtField"/>
      <input type="button" id="Assign" onClick= {assign} value="Assign" />
      <h1 id="Counter" >{counter}</h1>
      </div>
      <div className="up_down_btn">
      <input type="button" onClick={increment} value="Up" id="Up_btn"/>
      <input type="button" onClick={decrement} value="Down" id="Down_btn"/>
      
      </div>
      
         
      
     
   </div>
  );
}

export default App;

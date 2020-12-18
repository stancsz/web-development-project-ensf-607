import React, { useState } from 'react';

const FunInfo=(props)=> {
 



  
    return (
      <div className="App">
        
        
        
        <h1> {props.info.calendarReference} </h1>
        <h1>{props.info.courseNum} </h1>
       
      </div>
    );
  }
  
  export default FunInfo;
  
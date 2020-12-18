import React, { useState } from 'react';
import InfoData from '../data/DataInfo.json'
const FunInfo=()=> {
  const info = InfoData["ENSF 409"].courseName
  const courseList=Object.keys(InfoData)
  //const node2=InfoData.Info.find((n)=> n['ENSF 607'])
  const [selectedCourse,setSelection]=useState()
  //const outcome
 // const grade
    return (
      <div className="App">
        {courseList.map((n)=>{
          return n
        })}
       // {/* {console.log(courseList.map((course)=>{course}))} */}
        
        <h1> This is Info section</h1>
       
      </div>
    );
  }
  
  export default FunInfo;
  
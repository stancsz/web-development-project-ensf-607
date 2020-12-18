import React, { useState } from 'react';
import InfoData from '../data/DataInfo.json'
const FunInfo=(props)=> {
  console.log(props)
  //const info = InfoData["ENSF 409"].courseName
  //const courseList=Object.keys(InfoData)
  //const node2=InfoData.Info.find((n)=> n['ENSF 607'])
  const [selectedCourse,setSelection]=useState()
  //const outcome
 // const grade
//  "courseNum" : "ENSF 409",
//  "courseName" : "Principles of Software Development", 
//  "courseInfo" : "A survey of software design and development topics for Engineering students. Topics include: key features of an object-oriented programming language, especially inheritance and polymorphism; elements of object-oriented design; programming and application of common data structures; strategies and tools for testing and debugging.",
//  "courseHours" : "3 units; H (3-2)",
//  "academicCredit" : 3,
//  "calendarReference
  
    return (
      <div className="App">
        
        {/* {console.log(courseList.map((course)=>{course}))} */}
        
        <h1> {props.info.calendarReference} </h1>
        <h1>{props.info.courseNum} </h1>
       
      </div>
    );
  }
  
  export default FunInfo;
  
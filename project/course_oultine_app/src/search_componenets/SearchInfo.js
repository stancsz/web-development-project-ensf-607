import React, { useState } from "react";
import InfoData from "../data/DataInfo.json";
const FunInfo = (props) => {
  console.log(props);
  //const info = InfoData["ENSF 409"].courseName
  //const courseList=Object.keys(InfoData)
  //const node2=InfoData.Info.find((n)=> n['ENSF 607'])
  const [selectedCourse, setSelection] = useState();
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

      <br/>
      <label className="label is-size-3 has-text-left pl-1">1. Calendar Information</label>
      <div className="label is-size-4 has-text-left pl-1 mb-0 pb-0">{props.info.courseNum}</div>
      <div className="label is-size-4 has-text-left pl-2 mt-0 pt-0">{props.info.courseName}</div>
      <div className="textarea has-text-left">{props.info.courseInfo}</div>
          
      <div className="columns"><div className="column is-one-quarter has-text-left pl-4 pt-4">Course Hours:</div>
          <div className="column has-text-left"><div className="label">{props.info.courseHours}</div></div>
      </div>

      <div className="columns"><div className="column is-one-quarter has-text-left pl-4 pt-4">Academic Credit:</div>
          <div className="column has-text-left"><div className="label">{props.info.academicCredit}</div></div>
      </div>

      <div className="columns"><div className="column is-one-quarter has-text-left pl-4 pt-4">Calendar Reference:</div>
          <div className="column has-text-left"><div className="a">{props.info.calendarReference}</div></div>
      </div>

      </div>
  );
};

export default FunInfo;

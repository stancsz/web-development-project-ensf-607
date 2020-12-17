import "bulma/css/bulma.css";

import { useState } from 'react';

function FunInfo() {


    const [courseNumberInput, setCourseNumberInput] = useState();
    const [courseNameInput, setCourseNameInput] = useState();


    var courseInfoPlaceholderText = "Enter Course Information Here. Example: A survey of software design"
    + " and development topics for Engineering students. Topics include: key features of an object-oriented"
    + " programming language, especially inheritance and polymorphism; elements of object-oriented design;"
    + " programming and application of common data structures; strategies and tools for testing and debugging.";

  

  return (
    <div className="FunInfo">

    <br/>
      

    <div className="field">

        <br/>
        
        <label className="label is-size-3 has-text-left pl-1">1. Calendar Information</label>

        <div className="control">
            <input className="input is-size-4 has-text-left pl-1 mb-0 pb-0" 
            value={courseNumberInput} onInput={e => setCourseNumberInput(e.target.value)} 
            placeholder = "Enter Course Number. Example: ENSF 409"/>
        </div>
      
        <div className="control">
          <input className="input is-size-4 has-text-left pl-2 mt-0 pt-0" 
          value={courseNameInput} onInput={e => setCourseNameInput(e.target.value)} 
          placeholder = "Enter Course Name. Example: Principles of Software Development"></input>
        </div>
    
        <div className = "control">
            <textarea className="textarea is-info" placeholder = {courseInfoPlaceholderText} rows="4">
            </textarea>
        </div>

        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Course Hours:</div>
        <div className="column has-text-left">
            <div className="control">
                <input className="input" type="text" placeholder="Example: 3 units; H (3-2)"/>
            </div>
        </div>
        </div>
        
        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Academic Credit:</div>
        <div className="column has-text-left">
            <div className="control">
                <input className="input" type="text" placeholder="Example: 3"/>
            </div>
        </div>
        </div>

        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Calendar Reference:</div>
        <div className="column has-text-left">
        
            <div className="control">
                <input className="input" type="text" 
                placeholder="Example: http://www.ucalgary.ca/pubs/calendar/current/software-engineering-for-engineers.html#38252"/>
            </div>


        </div>
        </div>

    </div>

    </div>

  );
}

export default FunInfo;
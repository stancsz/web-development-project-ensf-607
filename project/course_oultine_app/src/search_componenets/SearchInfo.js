import "bulma/css/bulma.css";

import { useState } from 'react';

function SearchInfo(props) {


  return (
    <div className="FunInfo">

    <br/>
      

    <div className="field">

        <br/>
        
        <label className="label is-size-3 has-text-left pl-1">1. Calendar Information</label>
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Course Number:</div>
        <div className="control">
            <h3 className="input is-size-4 has-text-left pl-1 mb-0 pb-0" 
            
            placeholder = "Enter Course Number. Example: ENSF 409">{props.info.courseID.split("-").slice(0,2).join(" ")}</h3>
        </div>
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Course Name:</div>
        <div className="control">
          <h3 className="input is-size-4 has-text-left pl-2 mt-0 pt-0" 
          
          placeholder = "Enter Course Name. Example: Principles of Software Development">{props.info.courseName}</h3>
        </div>
    
        <div className = "control">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Course Info:</div>
            <textarea className="textarea is-info"  rows="4" value={props.info.courseInfo}>
            </textarea>
        </div>

        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Course Hours:</div>
        <div className="column has-text-left">
            <div className="control">
                <h3 className="input" type="text" >{props.info.courseHours}</h3>
            </div>
        </div>
        </div>
        
        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Academic Credit:</div>
        <div className="column has-text-left">
            <div className="control">
                <h3 className="input" type="text">{props.info.academicCredit}</h3>
            </div>
        </div>
        </div>

        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Calendar Reference:</div>
        <div className="column has-text-left">
        
            <div className="control">
                <a className="input"   href={props.info.calendarReference} target="_blank">{props.info.calendarReference}</a>
            
            </div>


        </div>
        </div>

    </div>

    </div>

  );
}

export default SearchInfo;

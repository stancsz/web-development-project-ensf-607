import TextField from '@material-ui/core/TextField';

import { useState } from 'react';

function FunInfo() {


    const [courseNumberInput, setCourseNumberInput] = useState();
    const [courseNameInput, setCourseNameInput] = useState();
    const [courseInfo, setCourseInfo] = useState();
    const [courseHours, setCourseHours] = useState();
    const [academicCredit, setAcademicCredit] = useState();
    const [calendarReference, setCalendarReference] = useState();


    var courseInfoPlaceholderText = "Enter Course Information. Example: A study of problems of particular interest to students specializing in Software Engineering."
  

  return (
    <div className="FunInfo">

 
    <div className="field">

        <TextField fullWidth placeholder = "Enter Course Number. Example: ENSF 409" 
        value={courseNumberInput} onInput={e => setCourseNumberInput(e.target.value)} 
        inputProps={{style: {fontSize: 20}}} 
        InputLabelProps={{style: {fontSize: 20}}} >
        </TextField>

        <br/>
        <br/>

        <TextField fullWidth placeholder = "Enter Course Name. Example: Principles of Software Development" 
        value={courseNameInput} onInput={e => setCourseNameInput(e.target.value)} 
        inputProps={{style: {fontSize: 20}}} 
        InputLabelProps={{style: {fontSize: 20}}} >
        </TextField>

        <br/>
        <br/>

        <TextField multiline fullWidth placeholder = {courseInfoPlaceholderText}
        value={courseInfo} onInput={e => setCourseInfo(e.target.value)} 
        inputProps={{style: {fontSize: 20}}} 
        InputLabelProps={{style: {fontSize: 20}}} >
        </TextField>
      
        <br/>
        <br/>
      


        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Course Hours:</div>
        <div className="column has-text-left">
            <TextField fullWidth placeholder = "Example: 3 units; H (3-2)"
            value={courseHours} onInput={e => setCourseHours(e.target.value)} 
             >
            </TextField>
        </div>
        </div>
        


        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Academic Credit:</div>
        <div className="column has-text-left">

            <TextField fullWidth placeholder = "Example: 3"
            value={academicCredit} onInput={e => setAcademicCredit(e.target.value)}>
            </TextField>
        </div>
        </div>

        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Calendar Reference:</div>
        <div className="column has-text-left">
            <TextField fullWidth placeholder = "Example: http://www.ucalgary.ca/pubs/calendar/current/software-engineering-for-engineers.html#38252"
            value={calendarReference} onInput={e => setCalendarReference(e.target.value)}>
            </TextField>
        </div>
        </div>

    </div>

    </div>

  );
}

export default FunInfo;
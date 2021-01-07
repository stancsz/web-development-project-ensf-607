import TextField from '@material-ui/core/TextField';

import { useEffect, useState } from 'react';

function FunInfo(props) {

    const[term,setTerm]=useState("")
    const[year,setYear]=useState("")
    const [courseNumberInput, setCourseNumberInput] = useState("");
    const [courseNameInput, setCourseNameInput] = useState();
    const [courseInfo, setCourseInfo] = useState();
    const [courseHours, setCourseHours] = useState();
    const [academicCredit, setAcademicCredit] = useState();
    const [calendarReference, setCalendarReference] = useState();
    

    useEffect(()=>{
        if( courseNumberInput!==""&&year!=="" && term!=="")
        {   var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            var hh=today.getHours()
            var min=today.getMinutes()
            var sec=today.getSeconds()
            
            today = yyyy+"-"+dd+"-"+mm+" "+hh+":"+min+":"+sec
            let id=courseNumberInput+"-"+term+"-"+year
            props.setInfo({courseID : id,courseName : courseNameInput,courseInfo : courseInfo,courseHours : courseHours,academicCredit:academicCredit,calendarReference :calendarReference,DateCreated : today})

          
            props.setSave(false)
        }
        else{

            props.setInfo({courseID : "",courseName : "",courseInfo : "",courseHours : "",academicCredit:"",calendarReference : "",DateCreated : ""})
        props.setSave(false)}
    },[courseNumberInput,year,term]);

    var courseInfoPlaceholderText = "Enter Course Information. Example: A study of problems of particular interest to students specializing in Software Engineering."
  

  return (
    <div className="FunInfo">

 
    <div className="field">

        <TextField fullWidth placeholder = "Enter Course Number. Example: ENSF 409" 
        value={courseNumberInput} onChange={e => {
                           setCourseNumberInput(e.target.value)}} 
        inputProps={{style: {fontSize: 20}}} 
        InputLabelProps={{style: {fontSize: 20}}} >
        </TextField>

        <br/>
        <br/>

        <TextField fullWidth placeholder = "Enter Course Name. Example: Principles of Software Development" 
        value={courseNameInput} onChange={e => setCourseNameInput(e.target.value)} 
        inputProps={{style: {fontSize: 20}}} 
        InputLabelProps={{style: {fontSize: 20}}} >
        </TextField>

        <br/>
        <br/>

        <TextField multiline fullWidth placeholder = {courseInfoPlaceholderText}
        value={courseInfo} onChange={e => setCourseInfo(e.target.value)} 
        inputProps={{style: {fontSize: 20}}} 
        InputLabelProps={{style: {fontSize: 20}}} >
        </TextField>
      
        <br/>
        <br/>
      


        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Course Hours:</div>
        <div className="column has-text-left">
            <TextField fullWidth placeholder = "Example: 3 units; H (3-2)"
            value={courseHours} onChange={e => setCourseHours(e.target.value)} 
             >
            </TextField>
        </div>
        </div>
        


        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Academic Credit:</div>
        <div className="column has-text-left">

            <TextField fullWidth placeholder = "Example: 3"
            value={academicCredit} onChange={e => setAcademicCredit(e.target.value)}>
            </TextField>
        </div>
        </div>

        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Calendar Reference:</div>
        <div className="column has-text-left">
            <TextField fullWidth placeholder = "Example: http://www.ucalgary.ca/pubs/calendar/current/software-engineering-for-engineers.html#38252"
            value={calendarReference} onChange={e => setCalendarReference(e.target.value)}>
            </TextField>
        </div>
        </div>
        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4"> Term:</div>
        <div className="column has-text-left">
            <TextField fullWidth placeholder = "Example: FALL,WINTER,SPRING,SUMMER"
            value={calendarReference} onChange={e => setTerm(e.target.value)}>
            </TextField>
        </div>
        </div>
        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4"> Year:</div>
        <div className="column has-text-left">
            <TextField fullWidth placeholder = "Example: 2020"
            value={calendarReference} onChange={e => setYear(e.target.value)}>
            </TextField>
        </div>
        </div>

    </div>

    </div>

  );
}

export default FunInfo;
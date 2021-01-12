import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import {  useState } from 'react';

function FunInfo(props) {
    
    const[term,setTerm]=useState("")
    const[year,setYear]=useState("")
    const [courseNumberInput, setCourseNumberInput] = useState("");
    
    const [courseInfo, setCourseInfo] = useState("");
 
    const [info,setInfo]=useState({CourseID : "",courseName : "",courseHours : "",academicCredit:"",calendarReference :"",DateCreated : ""});
    
    const editInfo=(id,name,description,hours,credit,calender,term,year)=>{
        let temp=info
       
       
        if(name!=="")
        temp.courseName=name
        
        
        if(hours!=="")
        temp.courseHours=hours
        if(credit!=="")
        temp.academicCredit=credit
        if(calender!=="")
        temp.calendarReference=calender

        
        setInfo(temp)
        

    }
const save=()=>{
    if(courseNumberInput==="" || term ==="" ){
    alert("Fill in Course Id,term and year")

}
    else
    {let temp=info
        let id=courseNumberInput+"-"+term+"-"+year
        temp.CourseID=id
         setInfo(temp)
         props.notes.CourseDescription=courseInfo
         var today = new Date();
         var dd = String(today.getDate()).padStart(2, '0');
         var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
         var yyyy = today.getFullYear();
         var hh=today.getHours()
         var min=today.getMinutes()
         var sec=today.getSeconds()
         
         today = yyyy+"-"+dd+"-"+mm+" "+hh+":"+min+":"+sec
         
         temp.DateCreated=today
         props.setInfo(temp)
    }
    
}
   

    var courseInfoPlaceholderText = "Enter Course Information. Example: A study of problems of particular interest to students specializing in Software Engineering."
  

  return (
    <div className="FunInfo">

<div className="pt-2 pb-2" align="right">
            <Button variant="outlined" color="secondary" onClick={()=>save()}>
              <SaveIcon />
            </Button>
          </div>
    <div className="field">

        <TextField fullWidth placeholder = "Enter Course Number. Example: ENSF 409" 
         onChange={e => {
                        setCourseNumberInput(e.target.value)
                           }} 
        inputProps={{style: {fontSize: 20}}} 
        InputLabelProps={{style: {fontSize: 20}}} >
        </TextField>

        <br/>
        <br/>

        <TextField fullWidth placeholder = "Enter Course Name. Example: Principles of Software Development" 
         onChange={e => editInfo("",e.target.value,"","","","","","")} 
        inputProps={{style: {fontSize: 20}}} 
        InputLabelProps={{style: {fontSize: 20}}} >
        </TextField>

        <br/>
        <br/>

        <TextField multiline fullWidth placeholder = {courseInfoPlaceholderText}
         onChange={e => setCourseInfo(e.target.value)} 
        inputProps={{style: {fontSize: 20}}} 
        InputLabelProps={{style: {fontSize: 20}}} >
        </TextField>
      
        <br/>
        <br/>
      


        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Course Hours:</div>
        <div className="column has-text-left">
            <TextField fullWidth placeholder = "Example: 3 units; H (3-2)"
             onChange={e => editInfo("","","",e.target.value,"","","","")} 
             >
            </TextField>
        </div>
        </div>
        


        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Academic Credit:</div>
        <div className="column has-text-left">

            <TextField fullWidth placeholder = "Example: 3"
             onChange={e => {editInfo("","","","",e.target.value,"","","")}}>
            </TextField>
        </div>
        </div>

        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Calendar Reference:</div>
        <div className="column has-text-left">
            <TextField fullWidth placeholder = "Example: http://www.ucalgary.ca/pubs/calendar/current/software-engineering-for-engineers.html#38252"
             onChange={e => editInfo("","","","","",e.target.value,"","")}>
            </TextField>
        </div>
        </div>
        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4"> Term:</div>
        <div className="column has-text-left">
            <TextField fullWidth placeholder = "Example: FALL,WINTER,SPRING,SUMMER"
             onChange={e => setTerm(e.target.value)}>
            </TextField>
        </div>
        </div>
        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4"> Year:</div>
        <div className="column has-text-left">
            <TextField fullWidth placeholder = "Example: 2020"
             onChange={e => {setYear(e.target.value)}
             }>
            </TextField>
        </div>
        </div>

    </div>

    </div>

  );
}

export default FunInfo;
import React, { useEffect, useState } from "react";
import FunInfo from "../add_outline_componenets/FunInfo.js";
import axios from 'axios'
import FunOutcome from "../add_outline_componenets/FunOutcome.js";
import FunCalculator from "../add_outline_componenets/FunCalculator.js"
import SearchPolicies from "../search_componenets/SearchPolicies"
import PublishIcon from '@material-ui/icons/Publish';
import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";


import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TimeTable from "../add_outline_componenets/FunTimeTable"
import Instructor from "../add_outline_componenets/FunInstructor"
import Exam from "../add_outline_componenets/FunExam"
import GradeDetermination from"../add_outline_componenets/FunGradeDetermination"
import GradeNotes from "../add_outline_componenets/FunGradeNotes"
import GradeDistribution from "../add_outline_componenets/FunGradeDistribution"
import TextBook from"../add_outline_componenets/FunTextbook"
import ContentCategory from"../add_outline_componenets/FunContentCategory"
import Section from "../add_outline_componenets/FunSection"
import Lab from "../add_outline_componenets/FunLab"
import { EmojiObjects } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const AddCourse = () => {
const classes = useStyles();
const [status,setStatus]=useState(true)

//db data
const[db,setDB]=useState()
//popup on upload
const [snackbarOpen, setSnackbarOpen] = useState(false);
  //JSON tables and use states
 
  const[notes,setNotes]=useState({GradeNotes:"",Examination:"",CourseDescription:"",UseCalc:""})
  const [save,setSave]=useState(false)
  const [info,setInfo]=useState({CourseID:""})//Blank CourseID used for checking
   const[contentCategory,setContentCategory]=useState("")
  const[section,setSection]=useState("")
  const[lab,setLab]=useState({})
  const[AuWeight,setAuWeight]=useState("")
  const [outcome,setOutcome]=useState([])
  const[timeTable,setTimeTable]=useState("")
  const [coordinator,setcoordinator]=useState({})
  const[instructor,setInstructor]=useState([])
  const[ta,setTa]=useState([])
 
  const[gradeDetermination,setGradeDetermination]=useState("")
  const[gradeDistribution,setGradeDistribution]=useState("")
  const[textbook,setTextbook]=useState("")
//fetches data from db
useEffect(()=>{

  axios.get("http://34.220.149.181:8000/course/")
  .then(res => setDB(res.data))
  .catch((error) => {console.log(error)})
  
  setSave(false)
  
 },[save]);
 //TODO: for popup notification
 /*
 useEffect(()=>{
if(status && save){
setSnackbarOpen(true)
setStatus(true)

}
 },[status,save])*/

   
  
const upload=()=>{
  console.log(notes)
  let check=true
  if(info.CourseID!=="")
{
 
  for(let i=0;i<db.length;i++){
        
    if(db[i].CourseID==info.CourseID)
    {
      
      check=false
      
    }
  }
  if(check){
  
  //posting COURSE
  axios.post("http://34.220.149.181:8000/course/",   {
    
    "CourseID": info.CourseID,
    "CourseHours": info.CourseHours,
    "CourseName": info.CourseName,
    "CalenderRefrence": info.CalenderRefrence,
    "AcademicCredit": info.AcademicCredit,
    "DateCreated": info.DateCreated
}).then(res=>{console.log(res)}).catch((error)=> {console.log(error)})
//posting Outcome

if(outcome.length>0)
outcome.map(row=>{
  axios.post("http://34.220.149.181:8000/outcome/",{
    "CourseID":info.CourseID,
    "OutcomeNum":row.OutcomeNum,
    "Description":row.Description,
    "GraduateAttribute":row.GraduateAttribute,
    "InstructionLvl":row.InstructionLvl
  }).then(res=>{console.log(res)})
})
//posting section
if(section.length>0)
section.map(row=>{
  axios.post("http://34.220.149.181:8000/section/",{
    
      "CourseID":info.CourseID,
      "SectionNumber":row.SectionNum,
      "Students":row.Student,
      "Hours":row.Hours,
      "type":row.type
        
      
      
  }).then(res=>{console.log(res)})
})
//posting content cartegory
if(contentCategory.length>0)
contentCategory.map(row=>{
  axios.post("http://34.220.149.181:8000/contentcategory/",{
    
    "CourseID":info.CourseID,
    "CategoryType":row.CategoryType,
    "Element":row.Element
        
      
      
  }).then(res=>{console.log(res)})
})
//posting au
if(AuWeight.length>0)
AuWeight.map(row=>{
  axios.post("http://34.220.149.181:8000/auweight/",{
    
    "CourseID":info.CourseID,
    "Category":row.Category,
    "AU":row.Au
        
      
      
  }).then(res=>{console.log(res)})
})
//posting LAB

if(Object.keys(lab).length !== 0)
  axios.post("http://34.220.149.181:8000/lab/",{
    "CourseID":info.CourseID,
    "LabNum":"NA",
    "LabType":lab.LabType,
    "NumberOfLabs":lab.NumberOfLabs,
    "SafetyExamined":lab.SafetyExamined,
    "SafetyTaught":lab.SafetyTaught,
    "FName":"NA",
    "LName":"NA",
    "Phone":"NA",
    "Office":"NA",
    "Email":"NA"
   
        
      
      
  }).then(res=>{console.log(res)})

//posting timetable

if(timeTable.length>0)
timeTable.map(row=>{
  axios.post("http://34.220.149.181:8000/timetable/",{
    
    
    "CourseID": info.CourseID,
    "SectionNum": row.SectionNum,
    "Days": row.Days,
    "Time": row.Time,
    "Location": row.Location
        
      
      
  }).then(res=>{console.log(res)})
})
//posting Coordinator
if(Object.keys(coordinator).length !== 0)
  axios.post("http://34.220.149.181:8000/coordinator/",{
    "CourseID": info.CourseID,
    "FName": coordinator.FName,
    "LName": coordinator.LName,
    "Phone": coordinator.Phone,
    "Office":coordinator.Office,
    "Email": coordinator.Email     
  }).then(res=>{console.log(res)})

//posting Instructor
if(instructor.length>0)
instructor.map(row=>{
  axios.post("http://34.220.149.181:8000/lecture/",{
    
    "CourseID":info.CourseID,
  "LectureNum":row.LectureNum,
  "FName":row.FName,
  "LName":row.LName,
  "Phone":row.Phone,
  "Office":row.Office,
  "Email":row.Email
        
      
      
  }).then(res=>{console.log(res)})
})
//posting Ta
if(ta.length>0)
ta.map(row=>{
  axios.post("http://34.220.149.181:8000/tutorial/",{
    
    "CourseID":info.CourseID,
  "TutorialNum":row.TutorialNum,
  "FName":row.FName,
  "LName":row.LName,
  "Phone":row.Phone,
  "Office":row.Office,
  "Email":row.Email
        
      
      
  }).then(res=>{console.log(res)})
})

  
  //posting notes
  
  if(notes.GradeNotes!==""&& notes.Examination!==""&& notes.UseCalc!==""&& notes.CourseDescription!=="")
  axios.post("http://34.220.149.181:8000/info/",{

  
  "CourseID": info.CourseID,
  "GradeNotes": notes.GradeNotes,
  "Examination": notes.Examination,
  "CourseDescription": notes.CourseDescription,
  "UseCalc": notes.UseCalc
  }).then(res=>{console.log(res)})
  //posting grade determination

  if(gradeDetermination.length>0)
  gradeDetermination.map(row=>{
    axios.post("http://34.220.149.181:8000/gradedetermination/",{
      
     
  
  "CourseID": info.CourseID,
  "Component": row.Componenet,
  "OutcomeEvaluated": row.OutcomeEvaluated,
  "Weight": row.Weight
          
        
        
    }).then(res=>{console.log(res)})
  })
  
//post grade distribution
if(gradeDistribution.length>0)
gradeDistribution.map(row=>{
  axios.post("http://34.220.149.181:8000/gradedistribution/",{
    
    "CourseID":info.CourseID,
    "LowerLimit":row.LowerLimit,
    "UpperLimit":row.UpperLimit,
    "LetterGrade":row.LetterGrade
        
      
      
  }).then(res=>{console.log(res)})
})
}
else
    alert("Course already exists")}
    else alert("Fill in calender info")
    
}


  return (
    <React.Fragment>
      <AppBar position="sticky" color="default">
        <Container maxWidth="md">
          <div className="pt-2 pb-2" align="right">
            <Button variant="outlined" color="secondary" onClick={()=>{
              setSave(true)
              //createJSON()
              upload()
              
             
                          
               }}>
                 upload
              <PublishIcon />
            </Button>
          </div>
        </Container>
      </AppBar>

      <br />

      <Container maxWidth="md">
        <Accordion defaultExpanded={true} elevation={5}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <label className="label is-size-3 has-text-left">
                1. Calendar Information
              </label>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ width: "100%" }}>
              <Paper className={classes.paper} elevation={3}>
                <FunInfo  setInfo={setInfo} notes={notes} />
                
              </Paper>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={true} elevation={5}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <label className="label is-size-3 has-text-left">
                2. Learning Outcomes
              </label>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ width: "100%" }}>
              <Paper className={classes.paper} elevation={3}>
               
                <FunOutcome  setOutcome={setOutcome}  />
                <ContentCategory setContent={setContentCategory} setAu={setAuWeight}/>
                <Section setSection={setSection}/>
                <Lab setLab={setLab}/>
                
              </Paper>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={true} elevation={5}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <label className="label is-size-3 has-text-left">
                3. Timetable
              </label>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ width: "100%" }}>
              <TimeTable setTimeTable={setTimeTable} />
              <Paper className={classes.paper} elevation={3}></Paper>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={true} elevation={5}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <label className="label is-size-3 has-text-left">
                4. Course Instructors
              </label>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ width: "100%" }}>
              <Instructor  setCoordinator={setcoordinator} setInstructor={setInstructor} setTa={setTa} />
              <Paper className={classes.paper} elevation={3}></Paper>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={true} elevation={5}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <label className="label is-size-3 has-text-left">
                5. Examinations
              </label>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ width: "100%" }}>
              <Exam notes={notes}/>
              <Paper className={classes.paper} elevation={3}>
                
              </Paper>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={true} elevation={5}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <label className="label is-size-3 has-text-left">
                6. Use of Calculators in Examinations
              </label>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ width: "100%" }}>
              
              <Paper className={classes.paper} elevation={3}>
                <FunCalculator notes={notes}/>
                           </Paper>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={true} elevation={5}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <label className="label is-size-3 has-text-left">
                7. Final Grade Determination
              </label>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ width: "100%" }}>
              <Paper className={classes.paper} elevation={3}>
                <GradeDetermination setGradeDetermination={setGradeDetermination}/>
                <br/>
                
                <GradeNotes notes={notes}/>
                <br/>
                <GradeDistribution setGradeDistribution={setGradeDistribution}/>
              </Paper>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={true} elevation={5}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <label className="label is-size-3 has-text-left">
                8. Textbook
              </label>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ width: "100%" }}>
              <Paper className={classes.paper} elevation={3}>

                <TextBook setTextbook={setTextbook}/>
              </Paper>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded={true} elevation={5}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <label className="label is-size-3 has-text-left">
                9. Course Policies
              </label>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ width: "100%" }}>
              <Paper className={classes.paper} elevation={3}>
                <SearchPolicies />
              </Paper>
            </div>
          </AccordionDetails>
        </Accordion>
      </Container>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackbarOpen}
        autoHideDuration={8000}
       
        message="Course uploaded"
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={()=>setSnackbarOpen(false)} >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>}/>
    </React.Fragment>
  );
};
export default AddCourse;

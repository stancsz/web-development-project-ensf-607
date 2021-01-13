import React, { useEffect, useState } from "react";
import FunInfo from "../add_outline_componenets/FunInfo.js";
import axios from 'axios'
import FunOutcome from "../add_outline_componenets/FunOutcome.js";
import FunCalculator from "../add_outline_componenets/FunCalculator.js"
import SearchPolicies from "../search_componenets/SearchPolicies"

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
import SaveIcon from "@material-ui/icons/Save";

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

  


 
  //JSON tables and use states
 
  const[notes,setNotes]=useState({CourseID:"",GradeNotes:"",Examination:"",CourseDescription:"",UseCalc:""})
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

  
  const createJSON=()=>{
     
    if(info.CourseID!==""){
      //creat notes
      console.log(info.CourseID)
      console.log(info.CourseHours)
      console.log(info.CourseName)
      console.log(info.CalenderReference)
      console.log(info.AcademicCredit)
      
      axios.post("http://34.220.149.181:8000/course/",   {
        "ModelID": "",
        "CourseID": info.CourseID,
        "CourseHours": info.CourseHours,
        "CourseName": info.CourseName,
        "CalenderRefrence": info.CalenderReference,
        "AcademicCredit": info.AcademicCredit,
        "DateCreated": info.DateCreated
    }).then(res=>{console.log(res)})
      notes.CourseID=info.CourseID
      //creating outcome
      for(let i=0;i<outcome.length;i++){
        outcome[i].CourseID=info.CourseID
      }
      //creating content category
      for(let i=0;i<contentCategory.length;i++){
        contentCategory[i].CourseID=info.CourseID
      }
      //creating au
      for(let i=0;i<AuWeight.length;i++){
        AuWeight[i].CourseID=info.CourseID
      }
      //creating section
      for(let i=0;i<section.length;i++){
        section[i].CourseID=info.CourseID
      }
       //creating lab
       lab.CourseID=info.CourseID
      //creating TimeTable
      for(let i=0;i<timeTable.length;i++){
       
        timeTable[i].CourseID=info.CourseID
      }
      //creating Coordinator
      coordinator.CourseID=info.CourseID
      //creating instructor
      for(let i=0;i<instructor.length;i++){
       
        instructor[i].CourseID=info.CourseID
      }
      //creating ta
      for(let i=0;i<ta.length;i++){
       
        ta[i].CourseID=info.CourseID
      }
      //creating Grade Determination
      for(let i=0;i<gradeDetermination.length;i++){
       
        gradeDetermination[i].CourseID=info.CourseID
      }
      //creating Grade Distribution
      for(let i=0;i<gradeDistribution.length;i++){
       
        gradeDistribution[i].CourseID=info.CourseID
      }
       //creating textbook
       for(let i=0;i<textbook.length;i++){
       
        textbook[i].CourseID=info.CourseID
      }
    }
  }
useEffect(()=>{
  if(save)
{
  console.log("calenderInfo")
  console.log(info)
  console.log("Notes")
  console.log(notes)
  
  console.log("Outcome")
  console.log(outcome)

  console.log("Content Category")
  console.log(contentCategory)
  console.log("Au weight")
  console.log(AuWeight)
  console.log("Section")
  console.log(section)

  console.log("Lab")
  console.log(lab)

  console.log("TimeTable")
  console.log(timeTable)
  console.log("coordinator tabke: ")
console.log(coordinator)
  console.log("Instructor table: ")
  console.log(instructor)

console.log("ta table ")
console.log(ta)

console.log("Grade Determination")
console.log(gradeDetermination)
console.log("Grade Distribution")
console.log(gradeDistribution)
console.log("Textbook")
console.log(textbook)
setSave(false)
}
},[save])


  return (
    <React.Fragment>
      <AppBar position="sticky" color="default">
        <Container maxWidth="md">
          <div className="pt-2 pb-2" align="right">
            <Button variant="outlined" color="secondary" onClick={()=>{
              createJSON()
              setSave(true)
              
              if(info.CourseID==="")
             { alert("Please fill in course number,term, and year")
              
            }   
                          
               }}>
              <SaveIcon />
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
      
    </React.Fragment>
  );
};
export default AddCourse;

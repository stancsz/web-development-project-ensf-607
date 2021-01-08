import React, { useEffect, useState } from "react";
import FunInfo from "../add_outline_componenets/FunInfo.js";
import FunGrade from "../add_outline_componenets/FunGrade";
import FunOutcome from "../add_outline_componenets/FunOutcome.js";
import FunCalculator from "../add_outline_componenets/FunCalculator.js"
import SearchPolicies from "../search_componenets/SearchPolicies"
import TextField from '@material-ui/core/TextField';
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
import ReactQuill from "react-quill";
import MUIRichTextEditor from "mui-rte";
import { Editor, EditorState } from "draft-js";
import RichTextEditor from "react-rte";
import TimeTable from "../add_outline_componenets/FunTimeTable"
import Instructor from "../add_outline_componenets/FunInstructor"
import Exam from "../add_outline_componenets/FunExam"
import GradeDetermination from"../add_outline_componenets/FunGradeDetermination"
import GradeNotes from "../add_outline_componenets/FunGradeNotes"
import GradeDistribution from "../add_outline_componenets/FunGradeDistribution"
import TextBook from"../add_outline_componenets/FunTextbook"
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
  const [count, setCount] = useState(1);
  const[notes,setNotes]=useState({CourseID:"",})
  const [save,setSave]=useState(false)
  const [info,setInfo]=useState({CourseID:""})
  const [examinationEditorState, setExaminationEditorState] = useState(
    RichTextEditor.createEmptyValue()
  );
  const [calculatorInfo, setCalculatorInfo] = useState();
  const[description,setDescription]=useState();
  const [outcome,setOutcome]=useState({CourseID:""})
  const[timeTable,setTimeTable]=useState({CourseID:""})
  const [coordinator,setcoordinator]=useState({CourseID:""})
  const[instructor,setInstructor]=useState({CourseID:""})
  const[ta,setTa]=useState("")
  /*
useEffect(()=>{
  if(save)
{
  console.log("calenderInfo")
  console.log(info)
  console.log(description)
  console.log("Outcome")
  console.log(outcome)
  console.log("Instructor table: ")
  console.log(instructor)
console.log("coordinator tabke: ")
console.log(coordinator)
console.log("ta table ")
console.log(ta)
setSave(false)
}
},[outcome,instructor,coordinator,ta,timeTable])*/
const editNotes=(courseID,gradeNotes,description,examination,calculator)=>{
  let temp=notes
  if(courseID!=="")
  temp.CourseID=courseID
  if (gradeNotes!=="")
  temp.GradeNotes=gradeNotes
  if(examination.toString("html")!=="")
  temp.Examination=examination
  if (description!=="")
  temp.CourseDescription=description
    if(calculator!=="")
  temp.UseCalc=calculator

  setNotes(temp)
}

  return (
    <React.Fragment>
      <AppBar position="sticky" color="default">
        <Container maxWidth="md">
          <div className="pt-2 pb-2" align="right">
            <Button variant="outlined" color="secondary" onClick={()=>{
              setSave(true)
              console.log(outcome)
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
                <FunInfo save={save} setSave={setSave} setInfo={setInfo} setNotes={setNotes} />
                
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
               <h1> {info.CourseID}</h1>
                <FunOutcome save={save} setSave={setSave} setOutcome={setOutcome} courseID={info.CourseID} />
                
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
              <TimeTable save={save} setSave={setSave} setTimeTable={setTimeTable} courseID={info.CourseID}/>
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
              <Instructor save={save} setSave={setSave} setCoordinator={setcoordinator} setInstructor={setInstructor} setTa={setTa} courseID={info.CourseID}/>
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
              <Exam/>
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
                <FunCalculator/>
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
                <GradeDetermination/>
                <br/>
                
                <GradeNotes/>
                <br/>
                <GradeDistribution/>
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

                <TextBook/>
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

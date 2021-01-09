import React, {useState, useEffect} from "react";
import Info from "../search_componenets/SearchInfo";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Outcome from "../search_componenets/SearchOutcome";
import Timetable from "../search_componenets/SearchTimetable";
import Instructors from "../search_componenets/SearchInstructors";
import Coordinators from "../search_componenets/SearchCoordinators";
import TA from "../search_componenets/SearchTA";
import Examinations from "../search_componenets/SearchExaminations";
import Calculator from "../search_componenets/SearchCalculator";
import Grade from "../search_componenets/SearchGrade";
import Letter from "../search_componenets/SearchLetterGrade";
import Note from "../search_componenets/SearchNote";
import Textbook from "../search_componenets/SearchTextbook";
import Policies from "../search_componenets/SearchPolicies";
import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


//Dummy data
//import OutcomeData from "../data/DataOutcome.json";
//import GradesData from "../data/DataGrades.json";
//import InfoData from "../data/DataInfo.json";
//import LetterData from "../data/DataLetterGrades.json";
//import NoteData from "../data/DataNotes.json";



import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  {/*
  //Finds recent added course from dummy data
  const recent=()=>{
    
    let keys=Object.keys(InfoData)
    console.log("Keys "+keys.length)
    let dates=[{}]
    for (let i=0;i<keys.length;i++){
        dates.push({date:new Date(InfoData[keys[i]].DateCreated),id:keys[i]})
        
    }
    dates=dates.slice(1)
    let temp=[]
    let course
    dates.map((i)=>{
temp.push(i.date)
    })
    console.log(temp)
    var maxDate=new Date(Math.max.apply(null,temp));
    console.log(maxDate)
    dates.map((i)=>{
        if(i.date.getTime() === maxDate.getTime())
        course=i.id
       
            })

   return course
  }
*/}


  //calls all of the search compnenets
const LastAdded = () => {

  const [frame, setFrame] = useState(
    <div>
    <br/>
    <br/>
    <br/>
    <div style={{fontSize : 20}}>
    
    LOADING LATEST COURSE...
    <br/>
    <CircularProgress />
    </div>
  </div>

  );
  const [course, setCourse] = useState(0);

  const [toggle, setToggle] = useState(0);

    const classes = useStyles();
    //const course=recent()
    //console.log(course)
    //const [outcome, setOutcome] = useState(OutcomeData[course]);
    //const [timetable, setTimetable] = useState({});
    //const [instructors, setInstructors] = useState({});
    //const [examinations, setExaminations] = useState({});
    //const [calculator, setCalculator] = useState({});
    //const [textbook, setTextbook] = useState({});
    //const [grade, setGrade] = useState(GradesData[course]);
    //const [note, setNote] = useState(NoteData[course]);
    //const [info, setInfo] = useState(InfoData[course]);
    //const [letter, setLetter] = useState(LetterData[course]);


    const [info, setInfo] = useState(0);
    const [outcome, setOutcome] = useState(0);
    const [timetable, setTimetable] = useState(0);
    const [instructors, setInstructors] = useState(0);
    const [coordinators, setCoordinators] = useState(0);
    const [assistants, setAssistants] = useState(0);
    const [examinations, setExaminations] = useState(0);
    const [calculator, setCalculator] = useState(0);
    const [gradeDetermination, setGradeDetermination] = useState(0);
    const [note, setNote] = useState(0);
    const [letter, setLetter] = useState(0);
    const [textbook, setTextbook] = useState(0);
    const [description, setDescription] = useState(0);
   
    const [InfoData, setInfoData] = useState(0); //COURSE
    const [outcomeData, setOutcomeData] = useState(0);
    const [timetableData, setTimetableData] = useState(0);
    const [instructorsData, setInstructorsData] = useState(0);
    const [coordinatorsData, setCoordinatorsData] = useState(0);
    const [assistantsData, setAssistantsData] = useState(0);
    const [gradeDeterminationData, setGradeDeterminationData] = useState(0);
    const [noteExaminationDescriptionCalcData, setnoteExaminationDescriptionCalcData] = useState(0);
    const [letterData, setLetterData] = useState(0);
    const [textbookData, setTextbookData] = useState(0);


    const [pageToggle, setPageToggle] = useState(0);


const fillFields = () => {
    axios.get("http://127.0.0.1:8000/course/")
    .then(res => {
      let num = 0;
      let latest = "";
      for(let i = 0; i < res.data.length; i++)
      {
        if(new Date(res.data[i].DateCreated).getTime() > num){
          num = new Date(res.data[i].DateCreated).getTime();
          latest = res.data[i];
        }
      }
      setCourse(latest)
    })

      axios.get("http://127.0.0.1:8000/coordinator/")
      .then(res => setCoordinatorsData(res.data))
      .catch((error) => {console.log(error)})
  
      axios.get("http://127.0.0.1:8000/gradedetermination/")
      .then(res => setGradeDeterminationData(res.data))
      .catch((error) => {console.log(error)})
  
      axios.get("http://127.0.0.1:8000/info/")
      .then(res => setnoteExaminationDescriptionCalcData(res.data))
      .catch((error) => {console.log(error)})
  
      axios.get("http://127.0.0.1:8000/outcome/")
      .then(res => setOutcomeData(res.data))
      .catch((error) => {console.log(error)})
  
      axios.get("http://127.0.0.1:8000/timetable/")
      .then(res => setTimetableData(res.data))
      .catch((error) => {console.log(error)})
  
      axios.get("http://127.0.0.1:8000/gradedistribution/")
      .then(res => setLetterData(res.data))
      .catch((error) => {console.log(error)})
  
      axios.get("http://127.0.0.1:8000/lecture/")
      .then(res => setInstructorsData(res.data))
      .catch((error) => {console.log(error)})
  
      axios.get("http://127.0.0.1:8000/tutorial/")
      .then(res => setAssistantsData(res.data))
      .catch((error) => {console.log(error)})
  
      axios.get("http://127.0.0.1:8000/course/")
      .then(res => setInfoData(res.data))
      .catch((error) => {console.log(error)})
      
      axios.get("http://127.0.0.1:8000/course/")
      .then(setToggle(1))
      .catch((error) => {console.log(error)})
}

    useEffect(() => {

      if(pageToggle === 0){
        axios.get("http://127.0.0.1:8000/course/")
        .then(res => {
          let num = 0;
          let latest = "";
          for(let i = 0; i < res.data.length; i++)
          {
            if(new Date(res.data[i].DateCreated).getTime() > num){
              num = new Date(res.data[i].DateCreated).getTime();
              latest = res.data[i];
            }
          }
          setCourse(latest)
        })

        setPageToggle(0.5)
      }


      if(course !== 0 && pageToggle === 0.5){
        fillFields();
        setPageToggle(1);
      }
      

      if(pageToggle === 1 && InfoData !== 0 && outcomeData !== 0 && timetableData !== 0 
        && instructorsData !== 0 && coordinatorsData !== 0 && assistantsData !== 0 && gradeDeterminationData !== 0 
        && noteExaminationDescriptionCalcData !== 0 && letterData !== 0){
          console.log(course)
          console.log(InfoData)
          
         
          setCoordinators(coordinatorsData.filter(res => res.CourseID === course)); 
          setGradeDetermination(gradeDeterminationData.filter(res => res.CourseID === course));
          setNote(noteExaminationDescriptionCalcData.filter(res => res.CourseID === course));
          setExaminations(noteExaminationDescriptionCalcData.filter(res => res.CourseID === course));
          setDescription(noteExaminationDescriptionCalcData.filter(res => res.CourseID === course));
          setCalculator(noteExaminationDescriptionCalcData.filter(res => res.CourseID === course));
          setOutcome(outcomeData.filter(res => res.CourseID === course));
          setTimetable(timetableData.filter(res => res.CourseID === course));
          setLetter(letterData.filter(res => res.CourseID === course));
          setInstructors(instructorsData.filter(res => res.CourseID === course));
          setAssistants(assistantsData.filter(res => res.CourseID === course));
          setInfo(InfoData.filter(res => res.CourseID === course));

          setPageToggle(2)
      }


      if(pageToggle === 2 && course !== 0 && info !== 0 && outcome !== 0 && timetable !== 0 && instructors !== 0 && coordinators !== 0
        && assistants !== 0 && examinations !== 0 && calculator !== 0 && gradeDetermination !== 0
        && note !== 0 && letter !==0 && description !== 0){

          //console.log(info)
      setFrame(
        <Container maxWidth="md">
            <Accordion defaultExpanded={true} elevation={5}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                        <label className="label is-size-3 has-text-left">1. Calendar Information</label>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{ width: '100%' }}>
                        <Paper className={classes.paper} elevation={3}>
                        <Info info={info} description={description} />
                        </Paper>
                    </div>
                </AccordionDetails>
                <Accordion defaultExpanded = {true} elevation = {5} >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
               <label className="label is-size-3 has-text-left">2. Learning Outcomes</label>
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div style={{ width: '100%' }}>
              <Paper className={classes.paper} elevation={3}>
              <Outcome outcome={outcome} />
              </Paper>
            </div>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded = {true} elevation = {5} >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
               <label className="label is-size-3 has-text-left">3. Timetable</label>
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div style={{ width: '100%' }}>
            <Paper className={classes.paper} elevation={3}>
            <Timetable timetable = {timetable}/>
            </Paper>
            </div>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded = {true} elevation = {5} >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
               <label className="label is-size-3 has-text-left">4. Course Instructors</label>
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div style={{ width: '100%' }}>
            <Paper className={classes.paper} elevation={3}>
            <Instructors instructors={instructors}/>
            <Coordinators coordinators = {coordinators}/>
            <TA assistants={assistants}/>
            </Paper>
            </div>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded = {true} elevation = {5} >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
               <label className="label is-size-3 has-text-left">5. Examinations</label>
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div style={{ width: '100%' }}>
            <Paper className={classes.paper} elevation={3}>
            <Examinations examinations = {examinations}/>
            </Paper>
            </div>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded = {true} elevation = {5} >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
               <label className="label is-size-3 has-text-left">6. Use of Calculators in Examinations</label>
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div style={{ width: '100%' }}>
            <Paper className={classes.paper} elevation={3}>
            <Calculator calculator = {calculator}/>
            </Paper>
            </div>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded = {true} elevation = {5} >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
               <label className="label is-size-3 has-text-left">7. Final Grade Determination</label>
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div style={{ width: '100%' }}>
            <Paper className={classes.paper} elevation={3}>
            <Grade gradeDetermination={gradeDetermination} />
            </Paper>
            <br/>
            <Paper className={classes.paper} elevation={3}>
            <Note note={note} />
          </Paper>
          <br/>
          <Paper className={classes.paper} elevation={3}>
            <Letter letter={letter} />
          </Paper>
            </div>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded = {true} elevation = {5}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
               <label className="label is-size-3 has-text-left">8. Textbook</label>
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div style={{ width: '100%' }}>
            <Paper className={classes.paper} elevation={3}>
            <Textbook />
          </Paper>
            </div>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded = {true} elevation = {5} >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
               <label className="label is-size-3 has-text-left">9. Course Policies</label>
               </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div style={{ width: '100%' }}>
            <Paper className={classes.paper} elevation={3}>
            <Policies />
          </Paper>
            </div>
            </AccordionDetails>
          </Accordion>
            </Accordion>
        </Container>
    )
        setPageToggle(3)
        } 
  

    })

    return (
      <>
      <br/>
      {frame}
      </>
      
    )
};
export default LastAdded;

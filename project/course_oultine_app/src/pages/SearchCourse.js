import React, { useState, useEffect } from "react";
import Info from "../search_componenets/SearchInfo";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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
import AppBar from "@material-ui/core/AppBar";

import { DataGrid } from "@material-ui/data-grid";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PageviewIcon from "@material-ui/icons/Pageview";
import EditIcon from "@material-ui/icons/Edit";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";


import axios from "axios";

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import {DataTableCell, TableHeader, TableCell, TableBody, Table} from '@david.kucsai/react-pdf-table'

import { PDFDownloadLink, Page, Text, View, Document, Image} from '@react-pdf/renderer';
import schulichlogo from "../schulichlogo.png";
import initials from "../initials.png"

const MyDoc = (props) => (
  <Document>
    <Page size="A4">
    <View>
        <Image style={{width:150, height:75, marginVertical: 10, marginHorizontal: 20}} src={schulichlogo} />
        <Text style = {{ position: "absolute", top: 10, right: 20}}>{"COURSE OUTLINE" + "\n" + 
        props.courseNumberInput.split("-")[2] + " " + props.courseNumberInput.split("-")[3]}</Text>
      </View>
      <Image style={{width:250, height:50, position: "absolute", top: 50, right: 20}} src={initials} />
      <View>
      <Text style = {{ color: 'black', fontSize: 22, textAlign: 'left'}}> </Text>
      </View>
    <View>
        <Text style = {{ color: 'black', fontSize: 22, textAlign: 'left', marginHorizontal: 20}}>1. Calendar Information</Text>
      </View>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <View>
        <Text style = {{ color: 'white', backgroundColor : 'black', textAlign: 'left', marginHorizontal: 20}}>
          {props.courseNumberInput === undefined ? "Data Missing" : props.courseNumberInput.split("-")[0] 
          + " " + props.courseNumberInput.split("-")[1] + "\n" + 
          (props.courseNameInput === undefined ? "Data Missing" : props.courseNameInput)}</Text>
      </View>
      <View>
        <Text style = {{fontSize: 12, marginHorizontal: 20}}>
      {props.courseDescription === undefined ? "Data Missing" : props.courseDescription}
      </Text>
      </View>
      <View><Text style = {{fontSize: 14}}>&nbsp;</Text></View>
      <View>
        <Text style = {{fontSize: 12, marginHorizontal: 20}}>
      {"Course Hours:" + "                  " + (props.courseHours === undefined ? "Data Missing" : props.courseHours)}
      </Text>
      </View>
      <View>
        <Text style = {{fontSize: 12, marginHorizontal: 20}}>
      {"Academic Credit:" + "              " + (props.academicCredit === undefined ? "Data Missing" : props.academicCredit)}
      </Text>
      </View>
      <View>
        <Text style = {{fontSize: 12, marginHorizontal: 20}}>
      {"Calendar Reference:" + "        " + (props.calendarReference === undefined ? "Data Missing" : "\n" + props.calendarReference)}
      </Text>
      </View>
      <View><Text style = {{fontSize: 14}}>&nbsp;</Text></View>
      <View>
        <Text style = {{ color: 'black', fontSize: 22, textAlign: 'left', marginHorizontal: 20}}>2. Learning Outcomes</Text>
      </View>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <View>
      <Text style = {{fontSize: 12, marginHorizontal: 20}}>
        At the end of this course, you will be able to:
      </Text>
      </View>
      <View style = {{marginHorizontal: 20}}>
        <Table data = {props.outcome} >
        <TableHeader>
            <TableCell style = {{textAlign : "center"}}>
                Number
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                Outcome
            </TableCell>
        </TableHeader>
        <TableBody>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.OutcomeNum}/>
            <DataTableCell style = {{fontSize: 10}} getContent={(r) => r.Description}/>
        </TableBody>
        </Table>
      </View>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <Text style = {{ color: 'black', fontSize: 22, textAlign: 'left', marginHorizontal: 20}}>3. Timetable</Text>
      <View style = {{marginHorizontal: 20}}>
        <Table data = {props.timetable} >
        <TableHeader>
            <TableCell style = {{textAlign : "center"}}>
                Section
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                Day(s) of the Week
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                Time
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                Location
            </TableCell>
        </TableHeader>
        <TableBody>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.SectionNum}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Days}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Time}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Location}/>
        </TableBody>
        </Table>
      </View>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <Text style = {{ color: 'black', fontSize: 22, textAlign: 'left', marginHorizontal: 20}}>4. Course Instructors</Text>
      <Text style = {{ color: 'black', fontSize: 12, textAlign: 'left', marginHorizontal: 20, 
      marginBottom: 0, textDecoration: "underline"}}>Course Instructor</Text>
      <View style = {{marginHorizontal: 20}}>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
        <Table data = {props.instructors} >
        <TableHeader>
            <TableCell style = {{textAlign : "center"}}>
                Section
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                First Name
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                Family Name
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                Phone
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                Office
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                Email
            </TableCell>
        </TableHeader>
        <TableBody>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.LectureNum}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.FName}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.LName}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Phone}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Office}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Email}/>
        </TableBody>
        </Table>
      </View>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      
      <Text style = {{ color: 'black', fontSize: 12, textAlign: 'left', marginHorizontal: 20, 
      marginBottom: 0, textDecoration: "underline"}}>Course Coordinator</Text>
      <View style = {{marginHorizontal: 20}}>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
        <Table data = {props.coordinators} >
        <TableHeader>
            <TableCell style = {{textAlign : "center"}}>
                First Name
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                Family Name
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                Phone
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                Office
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                Email
            </TableCell>
        </TableHeader>
        <TableBody>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.FName}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.LName}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Phone}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Office}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Email}/>
        </TableBody>
        </Table>
      </View>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>

      <Text style = {{ color: 'black', fontSize: 12, textAlign: 'left', 
      marginHorizontal: 20, marginBottom: 0, textDecoration: "underline"}}>Teaching Assistants</Text>
      <View style = {{marginHorizontal: 20}}>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
        <Table data = {props.assistants} >
        <TableHeader>
            <TableCell style = {{textAlign : "center"}}>
                Section
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                First Name
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                Family Name
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                Phone
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                Office
            </TableCell>
            <TableCell style = {{textAlign : "center"}}>
                Email
            </TableCell>
        </TableHeader>
        <TableBody>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.TutorialNum}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.FName}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.LName}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Phone}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Office}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Email}/>
        </TableBody>
        </Table>
      </View>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <Text style = {{ color: 'black', fontSize: 22, textAlign: 'left', marginHorizontal: 20}}>5. Examinations</Text>
      <Text style = {{fontSize: 12, marginHorizontal: 20}}>
      {props.examinations[0].Examination.replace(/<\/p>/g, '\n').replace(/<\/ol>/g, '\n').replace(/<br>/g, '\n')
      .replace(/<\/li>/g, '\n').replace(/<[^>]*>/g, '').replace(/&nbsp;/g, " ")}
      </Text>

      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <Text style = {{ color: 'black', fontSize: 22, textAlign: 'left', marginHorizontal: 20}}>6. Use of Calculators in Examinations</Text>
      <Text style = {{fontSize: 12, marginHorizontal: 20}}>
      {props.calculator[0] === undefined ? "Data Missing" : props.calculator[0].UseCalc}
      </Text>

      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <Text style = {{ color: 'black', fontSize: 22, textAlign: 'left', marginHorizontal: 20}}>7. Final Grade Determination</Text>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <View>
      <Text style = {{fontSize: 12, marginHorizontal: 20}}>
      The final grade in this course will be based on the following components:
      </Text>
      </View>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>

      <View style = {{marginHorizontal: 20}}>
        <Table data = {props.gradeDetermination} >
        <TableHeader>
            <TableCell style = {{textAlign : "center", fontSize: 12}}>
                Component
            </TableCell>
            <TableCell style = {{textAlign : "center", fontSize: 12}}>
                Learning Outcome(s) Evaluated
            </TableCell>
            <TableCell style = {{textAlign : "center", fontSize: 12}}>
                Weight
            </TableCell>
        </TableHeader>
        <TableBody>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Component}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.OutcomeEvaluated}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Weight}/>
        </TableBody>
        </Table>
      </View>
      <View>
        <Text style = {{fontSize: 12, marginHorizontal: 20, textAlign: "right"}}>
        {"Total:" + " " + (Object.values(props.gradeDetermination).reduce((a,b) => a + b.Weight, 0)) + "%"}
        </Text>
      </View>

      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <View>
      <Text style = {{fontSize: 12, marginHorizontal: 20}}>
      Notes:
      </Text>
      </View>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <Text style = {{fontSize: 12, marginHorizontal: 20}}>
      {props.note[0].GradeNotes.replace(/<\/p>/g, '\n').replace(/<\/ol>/g, '\n').replace(/<br>/g, '\n')
      .replace(/<\/li>/g, '\n').replace(/<[^>]*>/g, '').replace(/&nbsp;/g, " ")}
      </Text>

      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <View>
      <Text style = {{fontSize: 12, marginHorizontal: 20}}>
      Letter Grade Total Mark Distribution:
      </Text>
      </View>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <View style = {{marginHorizontal: 20}}>
        <Table data = {props.letter} >
        <TableHeader>
            <TableCell style = {{textAlign : "center", fontSize: 12}}>
                LetterGrade
            </TableCell>
            <TableCell style = {{textAlign : "center", fontSize: 12}}>
                Lower Mark Boundary
            </TableCell>
            <TableCell style = {{textAlign : "center", fontSize: 12}}>
                {"<= T <"}
            </TableCell>
            <TableCell style = {{textAlign : "center", fontSize: 12}}>
                Upper Mark Boundary
            </TableCell>
        </TableHeader>
        <TableBody>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.LetterGrade}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.LowerBoundary}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => "<= T <"}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.UpperBoundary}/>
        </TableBody>
        </Table>
      </View>

      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <Text style = {{ color: 'black', fontSize: 22, textAlign: 'left', marginHorizontal: 20}}>8. Textbook</Text>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <View>
      <Text style = {{fontSize: 12, marginHorizontal: 20}}>
        The following textbook(s) is required for this course:
      </Text>
      </View>
      <View style = {{marginHorizontal: 20}}>
        <Table data = {props.textbook.filter(t => t.type === "Required")} >
        <TableHeader>
            <TableCell style = {{textAlign : "center", fontSize: 12}}>
                Title
            </TableCell>
            <TableCell style = {{textAlign : "center", fontSize: 12}}>
                Author(s)
            </TableCell>
            <TableCell style = {{textAlign : "center", fontSize: 12}}>
                Edition, Year
            </TableCell>
            <TableCell style = {{textAlign : "center", fontSize: 12}}>
                Publisher
            </TableCell>
        </TableHeader>
        <TableBody>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.TITLE}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Author}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Edition}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Publisher}/>
        </TableBody>
        </Table>
      </View>

      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>

      <View>
      <Text style = {{fontSize: 12, marginHorizontal: 20}}>
        The following textbook(s) is recommended for this course:
      </Text>
      </View>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <View style = {{marginHorizontal: 20}}>
        <Table data = {props.textbook.filter(t => t.type === "Recommended")} >
        <TableHeader>
            <TableCell style = {{textAlign : "center", fontSize: 12}}>
                Title
            </TableCell>
            <TableCell style = {{textAlign : "center", fontSize: 12}}>
                Author(s)
            </TableCell>
            <TableCell style = {{textAlign : "center", fontSize: 12}}>
                Edition, Year
            </TableCell>
            <TableCell style = {{textAlign : "center", fontSize: 12}}>
                Publisher
            </TableCell>
        </TableHeader>
        <TableBody>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.TITLE}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Author}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Edition}/>
            <DataTableCell style = {{textAlign : "center"}} getContent={(r) => r.Publisher}/>
        </TableBody>
        </Table>
      </View>

      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <Text style = {{ color: 'black', fontSize: 22, textAlign: 'left', marginHorizontal: 20}}>9. Course Policies</Text>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <View><Text style = {{fontSize: 10, marginHorizontal: 20, textDecoration: "underline" }}>Advising Syllabus</Text></View>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <View><Text style = {{fontSize: 10, marginHorizontal: 20 }}>All Schulich School of Engineering students 
        and instructors have a responsibility to familiarize themselves with the policies described in the 
        Schulich School of Engineering Advising Syllabus available at:</Text></View>
      <View><Text style = {{fontSize: 10, marginHorizontal: 20 }}>http://schulich.ucalgary.ca/undergraduate/advising</Text></View>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <View><Text style = {{fontSize: 10, marginHorizontal: 20, textDecoration: "underline" }}>Emergency Evacuation/Assembly Points</Text></View>
      <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
      <View><Text style = {{fontSize: 10, marginHorizontal: 20 }}>In the event of an alarm sounding, all classrooms and labs must be evacuated immediately.  Please respond to alarms 
     promptly by leaving the building by the closest available exit.  Faculty and students must remain outside the building 
     until the 'all clear' has been given by a Fire Marshall. In case of emergency, call 220-5333.</Text></View>      
       <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
       <View><Text style = {{fontSize: 10, marginHorizontal: 20 }}>Assembly Points have been identified across campus. These areas have been selected as they are large enough to hold a 
     significant number of people and will provide an evacuated population access to washroom facilities and protection from 
     the elements. More information on assembly points can be found at </Text></View>   
     <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
     <View><Text style = {{fontSize: 10, marginHorizontal: 20 }}>http://www.ucalgary.ca/emergencyplan/assemblypoints.</Text></View>
     <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
     <View><Text style = {{fontSize: 10, marginHorizontal: 20, textDecoration: "underline" }}>WELLNESS AND MENTAL HEALTH RESOURCES</Text></View>
     <View><Text style = {{fontSize: 8 }}>&nbsp;</Text></View>
     <View><Text style = {{fontSize: 10, marginHorizontal: 20 }}>The University of Calgary recognizes the pivotal role that student mental health plays in physical health, 
     social connectedness and academic success, and aspires to create a caring and supportive campus community where individuals can freely talk about mental 
     health and receive supports when needed. We encourage you to explore the mental health resources available throughout the university community, such as 
     counselling, self-help resources, peer support or skills-building available through the SU Wellness Centre (Room 370, MacEwan Student Centre, 
     https://www.ucalgary.ca/wellnesscentre/services/mental-health-services) and the Campus Mental Health 
     Strategy website (http://www.ucalgary.ca/mentalhealth/). </Text></View>   

    </Page>
  </Document>
);



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


const SearchCourse = () => {

  const isReady = true;
  const classes = useStyles();

  const [courseList, setCourseList] = useState([]);
  const [course, setCourse] = React.useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (event) => {
    setCourse(event.target.value);
  };

  const [info, setInfo] = useState();
  const [outcome, setOutcome] = useState({});
  const [timetable, setTimetable] = useState({});
  const [instructors, setInstructors] = useState({});
  const [coordinators, setCoordinators] = useState({});
  const [assistants, setAssistants] = useState({});
  const [examinations, setExaminations] = useState({});
  const [calculator, setCalculator] = useState({});
  const [gradeDetermination, setGradeDetermination] = useState({});
  const [note, setNote] = useState({});
  const [letter, setLetter] = useState({});
  const [textbook, setTextbook] = useState({});
  const [description, setDescription] = useState({});
 

  const [InfoData, setInfoData] = useState({}); //COURSE
  const [outcomeData, setOutcomeData] = useState({});
  const [timetableData, setTimetableData] = useState({});
  const [instructorsData, setInstructorsData] = useState({});
  const [coordinatorsData, setCoordinatorsData] = useState({});
  const [assistantsData, setAssistantsData] = useState({});
  const [gradeDeterminationData, setGradeDeterminationData] = useState({});
  const [noteExaminationDescriptionCalcData, setnoteExaminationDescriptionCalcData] = useState({});
  const [letterData, setLetterData] = useState({});
  const [textbookData, setTextbookData] = useState({});
  

  const [frame, setFrame] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [tableSelection, setTableSelection] = useState("");
  const [displayIcons, setDisplayIcons] = useState();
  const [callHandleSelect, setCallHandleSelect] = useState();
  const [pageToggle, setPageToggle] = useState(true);

  const [PDFFragment, setPDFFragment] = useState("");



  const columns = [
    {
      field: "id",
      headerName: "Course ID",
      width: 400,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "datetime",
      headerName: "Date Created",
      width: 400,
      align: "center",
      headerAlign: "center",
    },
  ];

  let rows = [];

  for (let i = 0; i < Object.values(InfoData).length; i++) {
    var rowval = Object.values(InfoData)[i];
    rows.push({ id: rowval["CourseID"], datetime: rowval["DateCreated"].split(".")[0] + " UTC"});
  }

  
  const fillFields = () => {

    axios.get("http://34.220.149.181:8000/coordinator/")
    .then(res => setCoordinatorsData(res.data))
    .catch((error) => {console.log(error)})

    axios.get("http://34.220.149.181:8000/gradedetermination/")
    .then(res => setGradeDeterminationData(res.data))
    .catch((error) => {console.log(error)})

    axios.get("http://34.220.149.181:8000/info/")
    .then(res => setnoteExaminationDescriptionCalcData(res.data))
    .catch((error) => {console.log(error)})

    axios.get("http://34.220.149.181:8000/outcome/")
    .then(res => setOutcomeData(res.data))
    .catch((error) => {console.log(error)})

    axios.get("http://34.220.149.181:8000/timetable/")
    .then(res => setTimetableData(res.data))
    .catch((error) => {console.log(error)})

    axios.get("http://34.220.149.181:8000/gradedistribution/")
    .then(res => setLetterData(res.data))
    .catch((error) => {console.log(error)})

    axios.get("http://34.220.149.181:8000/lecture/")     
    .then(res => setInstructorsData(res.data))
    .catch((error) => {console.log(error)})

    axios.get("http://34.220.149.181:8000/tutorial/")
    .then(res => setAssistantsData(res.data))
    .catch((error) => {console.log(error)})

    axios.get("http://34.220.149.181:8000/textbook/")
    .then(res => setTextbookData(res.data))
    .catch((error) => {console.log(error)})

    axios.get("http://34.220.149.181:8000/course/")
    .then(res => setInfoData(res.data))
    .catch((error) => {console.log(error)})

    axios.get("http://34.220.149.181:8000/course/")
    .then(res => setCourseList(res.data.map(course => course.CourseID)))
    .catch((error) => {console.log(error)})

  };


  const handleSelect = () => {
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
    setTextbook(textbookData.filter(res => res.CourseID === course));
    setInfo(InfoData.filter(res => res.CourseID === course));
  };


  const handleUpdate = () => {  
    if (typeof info !== "undefined" && course !== "View All") {
      setFrame(
        <Container maxWidth="md">
          <br/>
          <Grid container spacing={3}>
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item xs={1}>
      <ArrowBackIcon
        onClick={() => {
          setCourse("View All");
          setCallHandleSelect(true);
        }}
      />
      </Grid>
      <Grid item xs={2}>
      <Button onClick ={() => {

       
          setPDFFragment(
            <div>
            {isReady ? (<div>
              <PDFDownloadLink document={<MyDoc 
                      courseNumberInput = {info[0].CourseID === undefined ? "Data Missing" : info[0].CourseID}
                      courseNameInput = {info[0].CourseName === undefined ? "Data Missing" : info[0].CourseName} 
                      courseDescription = {description[0].CourseDescription === undefined ? "Data Missing" : description[0].CourseDescription}  
                      courseHours = {info[0].CourseHours === undefined ? "Data Missing" : info[0].CourseHours} 
                      academicCredit = {info[0].AcademicCredit === undefined ? "Data Missing" : info[0].AcademicCredit} 
                      calendarReference = {info[0].CalenderRefrence === undefined ? "Data Missing" : info[0].CalenderRefrence}
                      outcome = {outcome === undefined ? "Data Missing" : outcome} 
                      timetable = {timetable === undefined ? "Data Missing" : timetable}
                      instructors={instructors === undefined ? "Data Missing" : instructors} 
                      coordinators = {coordinators === undefined ? "Data Missing" : coordinators} 
                      assistants={assistants === undefined ? "Data Missing" : assistants}
                      examinations = {examinations === undefined ? "Data Missing" : examinations} 
                      calculator = {calculator === undefined ? "Data Missing" : calculator} 
                      gradeDetermination={gradeDetermination === undefined ? "Data Missing" : gradeDetermination}
                      note={note === undefined ? "Data Missing" : note} 
                      letter={letter === undefined ? "Data Missing" : letter} 
                      textbook={textbook === undefined ? "Data Missing" : textbook} />} fileName="courseoutline.pdf">
                      
                      {({loading}) => (loading ? 'Loading document...' : 'Download PDF Now')}
                      </PDFDownloadLink>
                      </div>
              ) : ("") 
              }</div>)
          }} >Generate PDF</Button>
      </Grid>
    </Grid>
  </Grid>

          <Accordion defaultExpanded = {true} elevation = {5}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
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
          </Accordion>

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
              <Box m={2}>
            <Examinations examinations = {examinations}/>
            </Box>
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
            <Textbook textbook = {textbook}/>
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
        </Container>
      );
      setTableSelection("");


    } else {
      setFrame(
        <Container maxWidth="md">
          <br />
          <br />
          <Paper className={classes.paper} elevation={5}>
            <label className="label is-size-3 has-text-Center">
              Current Course Outlines
            </label>
            {displayIcons}
            <div style={{ height: 400 }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                align="center"
                onSelectionChange={(e) => {
                  setTableSelection(e.rowIds[0]);
                  setTableSelection("continue");
                }}
              />
            </div>
          </Paper>

            <div align="center">
              <br/>
          <Fab color="primary" size="medium" component={Link}to="/AddCourse">
        <AddIcon />
      </Fab>
      </div>

        </Container>
        
      );
    }
  };

  const revealIcons = () => {
    setDisplayIcons(
      <Grid align="right">
        <Button onClick={() => {
            setCourse(tableSelection);
            setCallHandleSelect(true);
            setSearchInput("");
          }}>
          VIEW&nbsp;
          <PageviewIcon fontSize="large"/>
        </Button>

       {/* <Button onClick={() => {}}>
          EDIT&nbsp;
          <EditIcon fontSize="large"/>
        </Button> */}

        <Button onClick={() => {

          axios.get("http://34.220.149.181:8000/course/" +  tableSelection + "/")
          .then(res => res.data.map(course => 
          axios.delete("http://34.220.149.181:8000/course/v2/" +  course.ModelID + "/")))

          axios.get("http://34.220.149.181:8000/tutorial/" +  tableSelection + "/")
          .then(res => res.data.map(course => 
          axios.delete("http://34.220.149.181:8000/tutorial/v2/" +  course.ModelID + "/")))

          axios.get("http://34.220.149.181:8000/lecture/" +  tableSelection + "/")
          .then(res => res.data.map(course => 
          axios.delete("http://34.220.149.181:8000/lecture/v2/" +  course.ModelID + "/")))

          axios.get("http://34.220.149.181:8000/gradedistribution/" +  tableSelection + "/")
          .then(res => res.data.map(course => 
          axios.delete("http://34.220.149.181:8000/gradedistribution/v2/" +  course.ModelID + "/")))

          axios.get("http://34.220.149.181:8000/timetable/" +  tableSelection + "/")
          .then(res => res.data.map(course => 
          axios.delete("http://34.220.149.181:8000/timetable/v2/" +  course.ModelID + "/")))

          axios.get("http://34.220.149.181:8000/outcome/" +  tableSelection + "/")
          .then(res => res.data.map(course => 
          axios.delete("http://34.220.149.181:8000/outcome/v2/" +  course.ModelID + "/")))

          axios.get("http://34.220.149.181:8000/gradedetermination/" +  tableSelection + "/")
          .then(res => res.data.map(course => 
          axios.delete("http://34.220.149.181:8000/gradedetermination/v2/" +  course.ModelID + "/")))

          axios.get("http://34.220.149.181:8000/info/" +  tableSelection + "/")
          .then(res => res.data.map(course => 
          axios.delete("http://34.220.149.181:8000/info/v2/" +  course.ModelID + "/")))
          
          axios.get("http://34.220.149.181:8000/coordinator/" +  tableSelection + "/")
          .then(res => res.data.map(course => 
          axios.delete("http://34.220.149.181:8000/coordinator/v2/" +  course.ModelID + "/")))

          axios.get("http://34.220.149.181:8000/textbook/" +  tableSelection + "/")
          .then(res => res.data.map(course => 
          axios.delete("http://34.220.149.181:8000/textbook/v2/" +  course.ModelID + "/")))
          
          setSnackbarOpen(true);
          setInfoData(InfoData.filter(res => res.CourseID !== tableSelection));
          rows = rows.filter(row => row.id !== tableSelection)
          handleUpdate();

        }}>
          DELETE&nbsp;
          <DeleteForeverIcon fontSize="large"/>
        </Button>
        
      </Grid>


        
    );
  };

  const displaySearchResults = () => {
    let filteredRows = [];

    for (let i = 0; i < Object.values(InfoData).length; i++) {
      var rowval = Object.values(InfoData)[i];
      if (
        rowval["CourseID"]
          .toLowerCase()
          .includes(searchInput.toLocaleLowerCase())
      ) {
        filteredRows.push({
          id: rowval["CourseID"],
          datetime: rowval["DateCreated"].split(".")[0] + " UTC",
        });
      }
    }
    setFrame(
      <Container maxWidth="md">
        <br />
        <br />
        <Paper className={classes.paper} elevation={5}>
          <Grid align="left">
            <ArrowBackIcon
              onClick={() => {
                setSearchInput("");
              }}
            />
          </Grid>
          <label className="label is-size-3 has-text-Center">
            Search Results:
          </label>
          {displayIcons}
          <div style={{ height: 400 }}>
            <DataGrid
              rows={filteredRows}
              columns={columns}
              pageSize={5}
              align="center"
              onSelectionChange={(e) => {
                setTableSelection(e.rowIds[0]);
                setTableSelection("continue");
              }}
            />
          </div>
        </Paper>
      </Container>
    );
  };


  useEffect(() => {

    setPDFFragment("")

    if(pageToggle){
      fillFields();
      setPageToggle(false);
    }

    if(courseList.length === 0){
      setFrame(
        <div>
          <br/>
          <br/>
          <br/>
          <div style={{fontSize : 20}}>
          
          LOADING COURSES...
          <br/>
          <CircularProgress />
          </div>
        </div>

      )
    }
    else{

    if (searchInput !== "") {
      displaySearchResults();
      setTableSelection("");
    } else if (searchInput === "") {
      setTableSelection("");
      handleUpdate();
    }

    tableSelection === "" ? setDisplayIcons() : revealIcons();

    if (callHandleSelect === true) {
      handleSelect();
      setCallHandleSelect(false);
    }

    }

  }, [info, searchInput, tableSelection, callHandleSelect, courseList]);
  

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {return;}
    setSnackbarOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" color="default">
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs>
              <div className="pt-2">
                <TextField
                  fullWidth
                  label="Search Courses"
                  variant="filled"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
            </Grid>

            <Grid item xs={false}>
              <Paper className={classes.paper}>
                <Button
                  variant="outlined"
                  color="secondary"
                  fullWidth={true}
                  onClick={() => {

                    handleSelect();
                  }}
                >
                  Select
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={false}>
              <FormControl className={classes.formControl}>
                <Select
                  value={course}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                 {courseList.map((i) => (
                    <MenuItem key={i} value={i}>{i}</MenuItem>
                  ))}  
                  <MenuItem value="View All">View All</MenuItem>
                </Select>
              </FormControl>
              <InputLabel>
                Select Course
              </InputLabel>
            </Grid>
          </Grid>
        </Container>
      </AppBar>



      <br/>
      <Container maxWidth="md">
      <div align = "right">
      {PDFFragment}
      </div>
      </Container>
     

      {frame}


      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackbarOpen}
        autoHideDuration={8000}
        onClose={handleSnackbarClose}
        message="Course Deleted"
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>}/>

    </>
  );
};
export default SearchCourse;

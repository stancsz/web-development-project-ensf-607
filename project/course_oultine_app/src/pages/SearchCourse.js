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
import { Link } from "react-router-dom";


import axios from "axios";


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

  const classes = useStyles();

  const [courseList, setCourseList] = useState([]);
  const [course, setCourse] = React.useState("");

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
    rows.push({ id: rowval["CourseID"], datetime: rowval["DateCreated"] });
  }

  
  const fillFields = () => {

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
    .then(res => setCourseList(res.data.map(course => course.CourseID)))
    .catch((error) => {console.log(error)})

  };


  const handleSelect = () => {
    setCoordinators(coordinatorsData.filter(res => res.CourseID === "ENSF-609-FALL-2021")); //REPLACE WITH COURSE
    setGradeDetermination(gradeDeterminationData.filter(res => res.CourseID === "ENSF-607-FALL-2020"));
    setNote(noteExaminationDescriptionCalcData.filter(res => res.CourseID === "ENSF-607-FALL-2021"));
    setExaminations(noteExaminationDescriptionCalcData.filter(res => res.CourseID === "ENSF-607-FALL-2021"));
    setDescription(noteExaminationDescriptionCalcData.filter(res => res.CourseID === "ENSF-607-FALL-2021"));
    setCalculator(noteExaminationDescriptionCalcData.filter(res => res.CourseID === "ENSF-607-FALL-2021"));
    setOutcome(outcomeData.filter(res => res.CourseID === course));
    setTimetable(timetableData.filter(res => res.CourseID === course));
    setLetter(letterData.filter(res => res.CourseID === course));
    setInstructors(instructorsData.filter(res => res.CourseID === course));
    setAssistants(assistantsData.filter(res => res.CourseID === course));
    setInfo(InfoData.filter(res => res.CourseID === course));
  };


  const handleUpdate = () => {  
    if (typeof info !== "undefined") {
      setFrame(
        <Container maxWidth="md">
          <Grid align="left">
            <br />
            <ArrowBackIcon
              onClick={() => {
                setCourse("View All");
                setCallHandleSelect(true);
              }}
            />
          </Grid>
          <br />

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

        <Button onClick={() => {}}>
          EDIT&nbsp;
          <EditIcon fontSize="large"/>
        </Button>

        <Button onClick={() => {}}>
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
          datetime: rowval["DateCreated"],
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

      {frame}

    </>
  );
};
export default SearchCourse;

import React, { useState, useEffect } from "react";
import Info from "../search_componenets/SearchInfo";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import OutcomeData from "../data/DataOutcome.json";
import GradesData from "../data/DataGrades.json";
import InfoData from "../data/DataInfo.json";
import LetterData from "../data/DataLetterGrades.json";
import NoteData from "../data/DataNotes.json";
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

  const courseList = Object.keys(InfoData);
  const classes = useStyles();

  const [course, setCourse] = React.useState("");

  const handleChange = (event) => {
    setCourse(event.target.value);
  };

  const [outcome, setOutcome] = useState({});
  const [timetable, setTimetable] = useState({});
  const [instructors, setInstructors] = useState({});
  const [coordinators, setCoordinators] = useState({});
  const [examinations, setExaminations] = useState({});
  const [calculator, setCalculator] = useState({});
  const [textbook, setTextbook] = useState({});
  const [grade, setGrade] = useState({});
  const [info, setInfo] = useState();
  const [letter, setLetter] = useState({});
  const [note, setNote] = useState({});

  const [outcomeData, setOutcomeData] = useState({});
  const [timetableData, setTimetableData] = useState({});
  const [instructorsData, setInstructorsData] = useState({});
  const [coordinatorsData, setCoordinatorsData] = useState({});
  const [examinationsData, setExaminationsData] = useState({});
  const [calculatorData, setCalculatorData] = useState({});
  const [textbookData, setTextbookData] = useState({});
  const [gradeData, setGradeData] = useState({});
  const [infoData, setInfoData] = useState();
  const [letterData, setLetterData] = useState({});
  const [noteData, setNoteData] = useState({});

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
    rows.push({ id: rowval["courseID"], datetime: rowval["DateCreated"] });
  }

  const [temp, setTemp] = useState();

  const fillFields = () => {

    
    //setTestValue(retrievedInfo.data[1].CourseID)
    //.then(res => setCoordinatorsData(res.data[0].CourseID))

    axios.get("http://127.0.0.1:8000/coordinator/")
    .then(res => setCoordinatorsData(res.data))
    .catch((error) => {console.log(error)})

   
  };


  const handleSelect = () => {
    let tempInfo = InfoData[course];
    let tempGrade = GradesData[course];
    let tempOutcome = OutcomeData[course];
    let tempLetter = LetterData[course];
    let tempNote = NoteData[course];
    setOutcome(tempOutcome);
    setInfo(tempInfo);
    setGrade(tempGrade);
    setLetter(tempLetter);
    setNote(tempNote);


    setCoordinators(coordinatorsData.filter(res => res.CourseID === "ENSF-609-FALL-2021"));
  };


  const handleUpdate = () => {   console.log(coordinators)
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
              <Info info={info} />
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
            <Timetable />
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
            <Instructors />
            <Coordinators coordinators = {coordinators}/>
            <TA />
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
            <Examinations />
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
            <Calculator />
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
            <Grade grade={grade} />
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
        rowval["courseID"]
          .toLowerCase()
          .includes(searchInput.toLocaleLowerCase())
      ) {
        filteredRows.push({
          id: rowval["courseID"],
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
  }, [info, searchInput, tableSelection, callHandleSelect]);

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

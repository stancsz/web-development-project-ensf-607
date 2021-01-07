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



//
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import PropTypes from 'prop-types';
//




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
  
//
  scrollUp: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
//

}));


//
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

  
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.scrollUp}>
        {children}
      </div>
    </Zoom>
  );
}

//


//
ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
//



//props
const SearchCourse = (props) => {

  const courseList = Object.keys(InfoData);
  const classes = useStyles();

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
 

  const [infoData, setInfoData] = useState(); //COURSE
  const [outcomeData, setOutcomeData] = useState({});
  const [timetableData, setTimetableData] = useState({});
  const [instructorsData, setInstructorsData] = useState({});
  const [coordinatorsData, setCoordinatorsData] = useState({});
  const [assistantsData, setAssistantsData] = useState({});
  const [examinationsData, setExaminationsData] = useState({});
  const [calculatorData, setCalculatorData] = useState({});
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
    rows.push({ id: rowval["courseID"], datetime: rowval["DateCreated"] });
  }


  
  const fillFields = () => {

    
    //setTestValue(retrievedInfo.data[1].CourseID)
    //.then(res => setCoordinatorsData(res.data[0].CourseID))

    axios.get("http://127.0.0.1:8000/coordinator/")
    .then(res => setCoordinatorsData(res.data))
    .catch((error) => {console.log(error)})

    axios.get("http://127.0.0.1:8000/gradedetermination/")
    .then(res => setGradeDeterminationData(res.data))
    .catch((error) => {console.log(error)})


    axios.get("http://127.0.0.1:8000/info/")
    .then(res => setnoteExaminationDescriptionCalcData(res.data))
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
    
    setLetter(tempLetter);
    


    setCoordinators(coordinatorsData.filter(res => res.CourseID === "ENSF-609-FALL-2021")); //REPLACE WITH COURSE
    setGradeDetermination(gradeDeterminationData.filter(res => res.CourseID === "ENSF-607-FALL-2020"));
    setNote(noteExaminationDescriptionCalcData.filter(res => res.CourseID === "ENSF-607-FALL-2021"));
    setExaminations(noteExaminationDescriptionCalcData.filter(res => res.CourseID === "ENSF-607-FALL-2021"));
    setDescription(noteExaminationDescriptionCalcData.filter(res => res.CourseID === "ENSF-607-FALL-2021"));
    setCalculator(noteExaminationDescriptionCalcData.filter(res => res.CourseID === "ENSF-607-FALL-2021"));
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


      {/**/}
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>


    </>
  );
};
export default SearchCourse;

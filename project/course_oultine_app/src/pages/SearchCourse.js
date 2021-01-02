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
import Examinations from "../search_componenets/SearchExaminations";
import Calculator from "../search_componenets/SearchCalculator";
import Grade from "../search_componenets/SearchGrade";
import Letter from "../search_componenets/SearchLetterGrade";
import Note from "../search_componenets/SearchNote";
import Textbook from "../search_componenets/SearchTextbook";
import Policies from "../search_componenets/SearchPolicies";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import VisibilityIcon from '@material-ui/icons/Visibility';
import { DataGrid } from '@material-ui/data-grid';

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
  const [examinations, setExaminations] = useState({});
  const [calculator, setCalculator] = useState({});
  const [textbook, setTextbook] = useState({});
  const [grade, setGrade] = useState({});
  const [info, setInfo] = useState();
  const [letter, setLetter] = useState({});
  const [note, setNote] = useState({});

  const [frame, setFrame] = useState();
  const [searchInput, setSearchInput] = useState("");
  const keys=Object.keys(InfoData)


  const columns = [
    { field: 'id', headerName: 'Course Number', width: "50%"},
    { field: 'courseName', headerName: 'Course Name', width: "100%"}
  ]

  const rows = [
    { id: "ENSF 409",  courseName : "Principles of Software Development"},
    { id: "ENSF 607",  courseName : "Principles of Software Development"},
    { id: "ENSF 619",  courseName : "Principles of Software Development"}
  ]


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
  };

  const handleUpdate = () => {
    if (typeof info !== "undefined") {
      setFrame(
        <Container maxWidth="md">
          <Paper className={classes.paper}>
            <Info info={info} />
          </Paper>

          <Paper className={classes.paper}>
            <Outcome outcome={outcome} />
          </Paper>

          <Paper className={classes.paper}>
            <Timetable />
          </Paper>

          <Paper className={classes.paper}>
            <Instructors />
          </Paper>

          <Paper className={classes.paper}>
            <Examinations />
          </Paper>

          <Paper className={classes.paper}>
            <Calculator />
          </Paper>

          <Paper className={classes.paper}>
            <Grade grade={grade} />
          </Paper>

          <Paper className={classes.paper}>
            <Note note={note} />
          </Paper>

          <Paper className={classes.paper}>
            <Letter letter={letter} />
          </Paper>

          <Paper className={classes.paper}>
            <Textbook />
          </Paper>

          <Paper className={classes.paper}>
            <Policies />
          </Paper>
        </Container>
      );
    } else {

      setFrame(
        <Container maxWidth="md">
            <br/>
          <Paper className={classes.paper}>
            <TableContainer component={Paper}>
              <label className="label is-size-3 has-text-Center">
                Current Course Outlines
              </label>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Course Number</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {keys.map((key) => (
                <TableRow key={key}>
                <TableCell component="th" scope="row">
                 {key}
                </TableCell> 
               
            </TableRow>
          ))}
            

                </TableBody>
              </Table>
            </TableContainer>

            <div style={{ height: 400, width: '100%'}}>
            <DataGrid rows={rows} columns={columns} id = "courseNum" pageSize={5} justify = 'center' />
            </div>
            
          </Paper>
        </Container>
      );

    }
  };

  useEffect(() => {
   
    handleSelect();

    if (searchInput !== "") {
      setFrame("Search Results");
    } else if (searchInput === "") {
      handleUpdate();
    }
  }, [course, searchInput]);


  return (
    <>
      <AppBar position="sticky" color="default">
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={course}
                  onChange={(e) => {
                    //console.log(e.target)
                    handleChange(e);
                  }}
                >
                  {courseList.map((i) => (
                    <MenuItem value={i}>{i}</MenuItem>
                  ))}
                  <MenuItem value = "View All">View All</MenuItem>
                </Select>
              </FormControl>
              <InputLabel id="demo-simple-select-label">
                Select Course
              </InputLabel>
            </Grid>

            <Grid item xs>
              <Paper className={classes.paper}>
                <Button
                  variant="outlined"
                  color="secondary"
                  fullWidth={true}
                  onClick={() => {
                    handleUpdate();
                  }}
                >
                  Select
                </Button>
              </Paper>
            </Grid>

            <Grid item xs>
              <div className="pt-2">
                <TextField
                  id="outlined-basic"
                  label="Search Courses"
                  variant="filled"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
            </Grid>

            <Grid item xs>
              <Paper className={classes.paper}>
                <Button
                  variant="outlined"
                  color="secondary"
                  fullWidth={true}
                  onClick={() => {
                    handleUpdate();
                  }}
                >
                  Save and Delete
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      {frame}
    </>
  );
};
export default SearchCourse;

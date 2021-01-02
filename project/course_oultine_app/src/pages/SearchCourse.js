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
  const [tableSelection, setTableSelection] = useState("");


  const columns = [
    { field: 'id', headerName: 'Course ID', width: 400, align: 'center',  headerAlign: 'center'},
    { field: 'datetime', headerName: 'Date Created', width: 400, align: 'center',  headerAlign: 'center'}
  ]


  let rows = []

  for(let i = 0; i < Object.values(InfoData).length; i++) {
    var rowval = Object.values(InfoData)[i];
    rows.push({id: rowval["courseID"], datetime: rowval["DateCreated"]})
}


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
            <br/>
          <Paper className={classes.paper} elevation={3}>
              <label className="label is-size-3 has-text-Center">
                Current Course Outlines
              </label>
              <br/>

            <div style={{height: 400}}>
            <DataGrid rows={rows} columns={columns} pageSize={5} align="center" 
            onSelectionChange = {(e) => {
               setTableSelection(e.rowIds[0]);
               
              }}
            
            />
            </div>
            
          </Paper>
        </Container>
      );

    }
  };

  useEffect(() => {
   

    if (searchInput !== "") {
      setFrame("Search Results");
    } else if (searchInput === "") {
      handleUpdate();
    }
  }, [info, searchInput, tableSelection]);


  return (
    <>
      <AppBar position="sticky" color="default">
        <Container maxWidth="md">
          <Grid container spacing={2}>
          <Grid item xs>
              <div className="pt-2">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Search Courses"
                  variant="filled"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
            </Grid>


            <Grid item xs ={0}>
              <Paper className={classes.paper}>
                <Button
                  variant="outlined"
                  color="secondary"
                  fullWidth={true}
                  onClick={() => {
                    //handleUpdate();
                    handleSelect();
                  }}
                >
                  Select
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={0}>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={course}
                  onChange={(e) => {
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

          </Grid>
        </Container>
      </AppBar>

      {frame}
    </>
  );
};
export default SearchCourse;

import React, { useEffect, useState } from "react";
import FunInfo from "../add_outline_componenets/FunInfo.js";
import FunGrade from "../add_outline_componenets/FunGrade";
import FunOutcome from "../add_outline_componenets/FunOutcome.js";
import FunCalculator from "../add_outline_componenets/FunCalculator.js"
import SearchPolicies from "../search_componenets/SearchPolicies"
import FunTextbook from "../add_outline_componenets/FunTextbook.js"

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

  const [examinationEditorState, setExaminationEditorState] = useState(
    RichTextEditor.createEmptyValue()
  );


  const toolbarConfig = {
    display: ["INLINE_STYLE_BUTTONS", "BLOCK_TYPE_BUTTONS", "HISTORY_BUTTONS"],
    INLINE_STYLE_BUTTONS: [
      { label: "Bold", style: "BOLD", className: "custom-css-class" },
      { label: "Italic", style: "ITALIC" },
      { label: "Underline", style: "UNDERLINE" },
    ],
    BLOCK_TYPE_DROPDOWN: [
      { label: "Normal", style: "unstyled" },
      { label: "Heading Large", style: "header-one" },
      { label: "Heading Medium", style: "header-two" },
      { label: "Heading Small", style: "header-three" },
    ],
    BLOCK_TYPE_BUTTONS: [
      { label: "UL", style: "unordered-list-item" },
      { label: "OL", style: "ordered-list-item" },
    ],
  };
  const [save,setSave]=useState(false)
  const [info,setInfo]=useState({courseID:""})
  const [outcome,setOutcome]=useState("")
  const[timeTable,setTimeTable]=useState("")
useEffect(()=>{
  if(timeTable.courseID!=="")
console.log(timeTable)
},[outcome])
  return (
    <React.Fragment>
      <AppBar position="sticky" color="default">
        <Container maxWidth="md">
          <div className="pt-2 pb-2" align="center">
            <Button variant="outlined" color="secondary" onClick={()=>{
              setSave(true)
              if(info.courseID==="")
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
                <FunInfo  setSave={setSave} setInfo={setInfo} info={info}/>
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
                <FunOutcome save={save} setSave={setSave} setOutcome={setOutcome} courseID={info.courseID} />
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
              <TimeTable save={save} setSave={setSave} setTimeTable={setTimeTable} courseID={info.courseID}/>
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
              <Paper className={classes.paper} elevation={3}>
                <Container maxWidth="md">
                  <RichTextEditor
                    value={examinationEditorState}
                    onChange={(value) => setExaminationEditorState(value)}
                    onClick={console.log(
                      examinationEditorState.toString("html")
                    )}
                    toolbarConfig={toolbarConfig}
                    placeholder="Provide a list of all course exams, authorized materials, and whenever possible, timetabling information..."
                  />
                </Container>
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
              <Paper className={classes.paper} elevation={3}><FunCalculator /></Paper>
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
                <FunGrade />
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
              <FunTextbook/>
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

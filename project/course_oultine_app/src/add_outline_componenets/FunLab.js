import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
  const [count, setCount] = useState(2);
  const classes = useStyles();

 const [lab,setLab]=useState({})

  const editLab=(NumberOfLabs,LabType,SafetyExamined,SafetyTaught)=>{
    let temp=lab
    temp.CourseID=""
    if(NumberOfLabs!=="")
    temp.NumberOfLabs=NumberOfLabs
    if(LabType!=="")
    temp.LabType=LabType
    if(SafetyExamined!=="")
    temp.SafetyExamined=SafetyExamined
    if(SafetyTaught!=="")
    temp.SafetyTaught=SafetyTaught
    setLab(temp)
    console.log(lab)
  }
const save=()=>{
  props.setLab(lab)
}
     


  return (
    <>
    <div className="pt-2 pb-2" align="right">
            <Button variant="outlined" color="secondary"  onClick={()=>save()}> 
              <SaveIcon />
            </Button>
          </div>
     
      <Typography variant="h5">Laboratory Information</Typography>

      <br />

      <div>
      Ignore this table if the course does not have a laboratory section.
      Number of Labs is the number of lab sessions students are required to attend.
      </div>


      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table 2">
          <colgroup>
            <col width="20%" />
            <col width="30%" />
            <col width="30%" />
          </colgroup>
          <TableHead>
            <TableRow>
            <TableCell>Lab Type</TableCell>
              <TableCell>Number of Labs</TableCell>
              <TableCell align="right">Lab Safety Taught?</TableCell>
              <TableCell align="right">Lab Safety Examined?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

          <TableRow key={"Laboratory Experience"}>
              <TableCell component="th" scope="row">
              <Select native onChange={(e) => {editLab("",e.target.value,"","")}}>
              <option aria-label="None" value={""} />
              <option value="Hands-on">Hands-on</option>
              <option value="Simulation">Simulation</option>
              <option value="Problem">Problem</option>
              <option value="Project">Project</option>
              <option value="Demo">Demo</option>
              <option value="Other">Other</option>
              </Select>
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }} onChange={(e) => {editLab(e.target.value,"","","")}}
                />
              </TableCell>
              <TableCell align="right">
              <Select native onChange={(e) => {editLab("","","",e.target.value)}}>
              <option aria-label="None" value={""} />
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </Select>
              </TableCell>
              <TableCell component="th" scope="row">
              <Select native onChange={(e) => {editLab("","",e.target.value,"")}}>
              <option aria-label="None" value={""} />
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </Select>
              </TableCell>
            </TableRow>


          </TableBody>
        </Table>
        <br />
      </TableContainer>
    </>
  );
}

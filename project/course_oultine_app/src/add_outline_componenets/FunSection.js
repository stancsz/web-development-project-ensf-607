import React, { useState} from "react";

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

import SaveIcon from "@material-ui/icons/Save";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
  
  const classes = useStyles();

const [section,setSection]=useState([])
 
 const editSection=(id,SectionNum,Student,hours,type)=>{
    let indx = section.findIndex((row) => row.id === id);
    
    let newSection=section
    if(indx>=0)
   {
    
     
     
    newSection[indx].CourseID=""
    if(SectionNum!=="")
    newSection[indx].SectionNum=SectionNum
    if(Student!=="")
    newSection[indx].Student=Student
    if(hours!=="")
    newSection[indx].hours=hours

   
     setSection(newSection)
     
}
else{
    let temp={}
    temp.id=id
    temp.CourseID=""
    temp.SectionNum=SectionNum
    temp.Student=Student
    temp.hours=hours
    temp.type=type
    newSection.push(temp)
    setSection(newSection)
}

 }

  
 const save=()=>{
     let temp=section
     for (let i=0;i<temp.length;i++)
     delete temp[i].id
     props.setSection(temp)
 }
  

     

  

 


  

  

  return (
    <>
    <div className="pt-2 pb-2" align="right">
            <Button variant="outlined" color="secondary" onClick={()=>save()}>
              <SaveIcon />
            </Button>
          </div>
     
      <br />
      <Typography variant="h5">Course Section Information</Typography>

      <br />

      <div>
        Ensure that the number of sections and hours per week are updated. You
        may leave the "Number of Students Per Supervisor" column for lecture
        blank.
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
            <TableCell>Type</TableCell>
              <TableCell>Number of Sections</TableCell>
              <TableCell align="right">Hours Per Week</TableCell>
              <TableCell align="right">Number of Students Per Supervisor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

          <TableRow key={"Lecture"}>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }}
                  value={"Lecture"}
                  readOnly={true}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }} onChange={(e)=>{
                      editSection(1,e.target.value,"","","Lecture")
                  }}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }} onChange={(e)=>{
                    editSection(1,"",e.target.value,"","Lecture")
                }}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }}onChange={(e)=>{
                    editSection(1,"","",e.target.value,"Lecture")
                }}
                />
              </TableCell>
            </TableRow>


            <TableRow key={"Tutorial"}>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }}
                  value={"Tutorial"}
                  readOnly={true}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }} onChange={(e)=>{
                    editSection(2,e.target.value,"","","Tutorial")
                }}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }} onChange={(e)=>{
                    editSection(2,"",e.target.value,"","Tutorial")
                }}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }}  onChange={(e)=>{
                    editSection(2,"","",e.target.value,"Tutorial")
                }}
                />
              </TableCell>
            </TableRow>


            <TableRow key={"Lab"}>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }} 
                  value={"Lab"}
                  readOnly={true}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }} onChange={(e)=>{
                    editSection(3,e.target.value,"","","Lab")
                }}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }} onChange={(e)=>{
                    editSection(3,"",e.target.value,"","Lab")
                }}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }} onChange={(e)=>{
                    editSection(3,"","",e.target.value,"Lab")
                }}
                />
              </TableCell>
            </TableRow>


          </TableBody>
        </Table>
        <br />
      </TableContainer>


      
    </>
  );
}

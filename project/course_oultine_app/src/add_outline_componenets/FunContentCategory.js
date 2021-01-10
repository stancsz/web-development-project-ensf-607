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

  
const [category,setCategory]=useState([])
 const [au,setAu]=useState([])
 const [total,setTotal]=useState("")
 
 const editAu =(id,type,weight)=>{
    let indx = au.findIndex((row) => row.id === id);
    
    let newAu=au
    if(indx>=0)
   {
    
     
     
    newAu[indx].CourseID=""
    newAu[indx].Category=type
    newAu[indx].Au=weight
     
     setAu(newAu)

 }
 else{

    let temp={}
    temp.id=id
    temp.CourseID=""
    temp.Category=type
    temp.Au=weight
    newAu.push(temp)
    setAu(newAu)

 }
 
 let temp=0
 for (let i=0;i<au.length;i++){
     if(au[i].Au!=="")
     temp+=parseFloat(au[i].Au)
    
 }

 setTotal(temp)
 console.log(au)
 }
 

  
 
const editCategory = (id,type,element)=>{
    let indx = category.findIndex((row) => row.id === id);
    
    let newCategory=category
    if(indx>=0)
   {
    
     
     
    newCategory[indx].CourseID=""
    newCategory[indx].CategoryType=type
    newCategory[indx].Element=element
     
     setCategory(newCategory)
     
}
else{
    let temp={}
    temp.id=id
    temp.CourseID=""
    temp.CategoryType=type
    temp.Element=element
    newCategory.push(temp)
    setCategory(newCategory)
}
//console.log(category)
}
const save=()=>{
    if(total!==100 )
    alert("Cant save make sure Au total is 100"+ total)
    else{
    let tempContent=category
    for( let i=0;i<category.length;i++){

        delete tempContent[i].id
        
    }
    let tempAu=au
    for( let i=0;i<au.length;i++){
        delete tempAu[i].id
        
    }

    
    props.setContent(tempContent)
    props.setAu(tempAu)
}}

  

  function mathContentElementOptions(id) {
    return (
      <Select native onChange={(e) => {editCategory(id,"Math",e.target.value)}}>
        <option aria-label="None" value={""} />
        <option value="DiffCalc">DiffCalc</option>
        <option value="DiffEq">DiffEq</option>
        <option value="Discrete">Discrete</option>
        <option value="IntCalc">IntCalc</option>
        <option value="LinAlg">LinAlg</option>
        <option value="NMeths">NMeths</option>
        <option value="Prob">Prob</option>
        <option value="Stats">Stats</option>
      </Select>
    );
  }

  function naturalScienceElementOptions(id) {
    return (
      <Select native onChange={(e) => {editCategory(id,"Natural Science",e.target.value)}}>
        <option aria-label="None" value={""} />
        <option value="Chem">Chem</option>
        <option value="Earth">Earth</option>
        <option value="Life">Life</option>
        <option value="Phys">Phys</option>
      </Select>
    );
  }
 
  function complementaryOptions(id) {
    return (
      <Select native onChange={(e) => {editCategory(id,"Complementary Studies",e.target.value)}}>
        <option aria-label="None" value={""} />
        <option value="EngEcon">EngEcon</option>
        <option value="H&S">H&S</option>
        <option value="HumSS">HumSS</option>
        <option value="Impacts">Impacts</option>
        <option value="OWComm">OWComm</option>
        <option value="PEthics">PEthics</option>
      </Select>
    );
  }

  return (
    <>
    <div className="pt-2 pb-2" align="right">
            <Button variant="outlined" color="secondary" onClick={()=>save()}>
              <SaveIcon />
            </Button>
          </div>
     
      <br />
      <Typography variant="h5">Course Content Categories</Typography>

      <div align="center">
        <br />
        The following table displays the course content categories and their AU
        (Accreditation Unit) percentages
      </div>
      <br />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table 2">
          <colgroup>
            <col width="30%" />
            <col width="25%" />
            <col width="25%" />
            <col width="20%" />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>Course Content Category</TableCell>
              <TableCell>Content Element</TableCell>
              <TableCell>Content Element</TableCell>
              <TableCell>AU %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={"Math"}>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }}
                  value={"Math"}
                  readOnly={true}
                />
              </TableCell>
              <TableCell align="right">{mathContentElementOptions(1)}</TableCell>
              <TableCell align="right">{mathContentElementOptions(2)}</TableCell>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  onChange={(e) => {
                    if( e.target.value >=0 && e.target.value<=100){
                  
                 editAu(1,"Math",e.target.value)
                 }
                 else {e.target.value=""
                }
                
                }
                
                
                }
                  inputProps={{ style: { textAlign: "center" } }}
                />
              </TableCell>
            </TableRow>

            <TableRow key={"Natural Science"}>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }}
                  value={"Natural Science"}
                  readOnly={true}
                />
              </TableCell>
              <TableCell align="right">
                {naturalScienceElementOptions(3)}
              </TableCell>
              <TableCell align="right">
                {naturalScienceElementOptions(4)}
              </TableCell>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  onChange={(e) => {
                    if( e.target.value >=0 && e.target.value<=100){
                  
                 editAu(2,"Natural Science",e.target.value)
                 }
                 else {e.target.value=""
                 }}}
                  inputProps={{ style: { textAlign: "center" } }}
                />
              </TableCell>
            </TableRow>

            <TableRow key={"Complementary Studies"}>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }}
                  value={"Complementary Studies"}
                  readOnly={true}
                />
              </TableCell>
              <TableCell align="right">{complementaryOptions(5)}</TableCell>
              <TableCell align="right">{complementaryOptions(6)}</TableCell>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  onChange={(e) => {
                    if( e.target.value >=0 && e.target.value<=100){
                    
                   editAu(3,"Complementary Studies",e.target.value)
                   }
                   else {e.target.value=""
                   }}}
                  inputProps={{ style: { textAlign: "center" } }}
                />
              </TableCell>
            </TableRow>

            <TableRow key={"Engineering Science"}>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }}
                  value={"Engineering Science"}
                  readOnly={true}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }}
                  value={"X"}
                  readOnly={true}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }}
                  value={"X"}
                  readOnly={true}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  onChange={(e) => {
                    if( e.target.value >=0 && e.target.value<=100){
                  
                 editAu(4,"Engineering Science",e.target.value)
                 }
                 else {e.target.value=""
                 }
                }}
                  inputProps={{ style: { textAlign: "center" } }}
                />
              </TableCell>
            </TableRow>

            <TableRow key={"Engineering Design"}>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  inputProps={{ style: { textAlign: "center" } }}
                  value={"Engineering Design"}
                  readOnly={true}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }}
                  value={"X"}
                  readOnly={true}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  inputProps={{ style: { textAlign: "center" } }}
                  value={"X"}
                  readOnly={true}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <TextField
                  id="standard-basic"
                  onChange={(e) => {
                    if( e.target.value >=0 && e.target.value<=100){
                  
                 editAu(5,"Engineering Design",e.target.value)
                 }
              else {e.target.value=""
            }
            }
                }
                  inputProps={{ style: { textAlign: "center" } }}
                />
              </TableCell>
            </TableRow>
            <TableRow >
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell>Total:</TableCell>
        <TableCell>{total}%</TableCell>
        </TableRow>
          </TableBody>
        </Table>
        <br />
        
      </TableContainer>

      <div style={{ color: "red" }}>
        *At least one element must be selected for categories that identify AUs
      </div>

     
    </>
  );
}

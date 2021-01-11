import React, { useState,useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';
import letters from "../add_outline_componenets/LetterDistribution.json"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});





export default function BasicTable(props) {

  const [count, setCount] = useState(2);
  const classes = useStyles();
  const[save,setSave]=useState(false)
  const [grade,setGrade]=useState(letters)
 


 


  const editGrade=(id,Lower,Higher)=>{
      if(id!==""){
    let indx = grade.findIndex((row) => row.id === id)
    let newGrade=grade
    
    if(Lower!=="")
    newGrade[indx].LowerLimit=Lower
    if(Higher!=="")
    newGrade[indx].HigherLimit=Higher
   
 
    
  
    setGrade(newGrade)}
    console.log(grade)

}
    //setRows(newRows)
   
  


  


  
  


  





  return (
    <>
    
    <div className="pt-2 pb-2" align="right">
            <Button variant="outlined" color="secondary" onClick={()=>{
                setSave(true)
            }}>
              <SaveIcon />
            </Button>
          </div>
          <label className="label is-size-5 has-text-left">
                  Grade Distribution:
              </label>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <colgroup>
            <col width="30%" />
            <col width="30%" />
            <col width="10%" />
            <col width="30%" />
            
            

          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>Letter</TableCell>
              <TableCell align="right">Lower Limit</TableCell>
              <TableCell></TableCell>
              <TableCell align="right">Higher Limit</TableCell>
              

            </TableRow>
          </TableHead>
          <TableBody>
            
            {grade.map((row) => (
              <TableRow key={row.id}>
               
                <TableCell align="center"><TextField id="standard-basic" fullWidth={true} value={row.Letter} 
                 /></TableCell>
                 <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{
                     if(e.target.value >=0 && e.target.value<=100)
                     editGrade(row.id,e.target.value,"")
                     else
                     e.target.value=""
                 }}
                 /></TableCell>
                 <TableCell align="right"><TextField id="standard-basic" fullWidth={true} value="<=T<=" readOnly={true}
                 /></TableCell>
                 <TableCell align="right"><TextField id="standard-basic" fullWidth={true}  onChange={(e)=>{
                     if(e.target.value >=0 && e.target.value<=100)
                     editGrade(row.id,"",e.target.value)
                     else
                     e.target.value=""
                 }}
                 /></TableCell>
               


              </TableRow>
            ))}
           
          </TableBody>
        </Table>
        
      </TableContainer>
      

     
    </>
  );
}

import React, { useState } from 'react';

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


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function BasicTable() {

  const [count, setCount] = useState(2);
  const classes = useStyles();
  const [rows, setRows] = useState([{ id: 1,  outcome: "" }]);
  const [numbers,setNumbers]=useState([{id:1,num:1}])
  const [outcomes,setOutcomes]=useState([{id:1,outcome:""}])


  const [attributeRows, setAttributeRows] = useState([{id: 1, outcomeNum: 1,  attribute: "", instructionLevel: "" }]);
  const [attributes, setAttributes] = useState([{id: 1, outcomeNum: 1,  attribute: "", instructionLevel: "" }]);
  const [chosenOutcome, setChosenOutcome] = useState([{id: 1, outcomeNum: 1,  attribute: "", instructionLevel: "" }]);
  const [instructionLevel, setInstructionLevel] = useState([{id: 1, outcomeNum: 1,  attribute: "", instructionLevel: "" }]);


 
  const editNums=(id,num)=>{
    let indx = numbers.findIndex((num)=>num.id===id)
    let newNums=numbers
    //console.log(indx)
    if(indx>=0)
    newNums[indx]={id:id,num:num}
    else
    newNums.push({id:id,num:num})
    
    setNumbers(newNums)
   // console.log(numbers)
  }

  const editOutcomes=(id,outcome)=>{
    let indx = outcomes.findIndex((row) => row.id === id)
    let newOutcomes=outcomes
    if(indx>=0)
    newOutcomes[indx]={id:id,outcome:outcome}
    else
    newOutcomes.push({id:id,outcome:outcome})
  
    setOutcomes(newOutcomes)
    //setRows(newRows)
    //console.log(outcomes)
  }


    const saveRow= (id) => {
      
      let numIndx = outcomes.findIndex((row) => row.id === id)
      
      let num=numbers[numIndx].num
      let outcomeIndx=outcomes.findIndex((outcome)=> outcome.id===id)
      let outcome=outcomes[outcomeIndx].outcome
      let rowIndx = rows.findIndex((row) => row.id === id)
      let newRows=rows
      newRows[rowIndx]={ id: id, num:num, outcome: outcome }
          
     setRows(newRows)
     console.log(rows)
  };


  const removeRow = (id) => {
    let newRows = rows.filter((row) => row.id !== id)
    
    for(let i = 0; i < newRows.length; i++){
      if(newRows[i].id > id){
        newRows[i].id = newRows[i].id - 1;
      }
    }
    setRows(newRows)
  }
  

  const addRow = (id) => {
    // console.log(...rows)

    let newRows = rows
    setCount(count+1)
    let x=count
    console.log("THIS IS "+x)

    newRows.push({ id: rows.length + 1, outcome: "" })
    setRows(newRows)
    console.log(rows)
  }



  const removeAttributeRow = (id) => {}
  const saveAttributeRow = (id) => {}
  
  const addAttributeRow = () => {
    let newRows = attributeRows
    newRows.push({id: 1, outcomeNum: 1,  attribute: "", instructionLevel: "" })
    setAttributeRows(newRows)
  }




  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <colgroup>
            <col width="10%" />
            <col width="80%" />
            

          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell align="right">Learning Outcome</TableCell>
              <TableCell align="right"></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">

                <TextField id="standard-basic"  
                inputProps={{style: { textAlign: 'center' }}}
                value = {row.id} readOnly={true}
                 />

                </TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e) => {
        
                  editOutcomes(row.id, e.target.value)
                }} /></TableCell>

                <div className={classes.root}>
                    <br/>
                    <DeleteIcon  onClick={()=> removeRow(row.id)} />

                    <SaveIcon onClick={()=>{ saveRow(row.id)}} />
                </div>

              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br />
        <Button variant="contained" color="primary" onClick={()=>{
          addRow()
        }}> +</Button>
      </TableContainer>
      <div align="left">
        <br/>
      Graduate Attributes are generic characteristics specified by the CEAB (Canadian Engineering Accreditation Board), 
      expected to be exhibited by graduates of Canadian engineering schools. 
      This table summarizes how the Learning Outcomes relate to key Graduate Attributes addressed in this course.
      </div>
      <br/>


      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table 2">
          <colgroup>
            <col width="20%" />
            <col width="50%" />
            <col width="20%" />
            

          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>Learning Outcome</TableCell>
              <TableCell align="right">Graduate Attribute</TableCell>
              <TableCell align="right">Instruction Level</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            
            {attributeRows.map((attributeRow) => (
              <TableRow key={attributeRow.id}>
                <TableCell component="th" scope="row">


                <Select native>
                  <option aria-label="None" value="" />
                  {rows.map((x) => <option value={x.id}>{x.id}</option>)};
                </Select>



                </TableCell>
                <TableCell align="right">
                <Select native value> 
                  <option aria-label="None" value="" />
                  <option value="A1. A knowledge base for engineering">
                  A1. A knowledge base for engineering
                  </option>
                  <option value="A2. Problem analysis">
                  A2. Problem analysis
                  </option>
                  <option value="A3. Investigation">
                  A3. Investigation
                  </option>
                  <option value="A4. Design">
                  A4. Design
                  </option>
                  <option value="A5. Use of engineering tools">
                  A5. Use of engineering tools
                  </option>
                  <option value=" A6. Individual and team work">
                  A6. Individual and team work
                  </option>
                  <option value="A7. Communication skills">
                  A7. Communication skills
                  </option>
                  <option value="A8. Professionalism">
                  A8. Professionalism
                  </option>
                  <option value="A9. Impact of engineering on society/environment">
                  A9. Impact of engineering on society/environment
                  </option>
                  <option value="A10. Ethics and equity">
                  A10. Ethics and equity
                  </option>
                  <option value="A11. Economics and project management">
                  A11. Economics and project management
                  </option>
                  <option value="A12. Life-long learning">
                  A12. Life-long learning
                  </option>
                </Select>
                </TableCell>
               


                <TableCell align="right">

                <Select native>
                  <option aria-label="None" value="" />
                  <option value="I (Introduced)">
                  I (Introduced)
                  </option>
                  <option value="D (Developed)">
                  D (Developed)
                  </option>
                  <option value="A (Applied)">
                  A (Applied)
                  </option>
                </Select>

                </TableCell>

                <div className={classes.root}>
                    <br/>
                    <DeleteIcon  onClick={()=> removeAttributeRow()} />

                    <SaveIcon onClick={()=>{ saveAttributeRow()}} />
                </div>

              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br />
        <Button variant="contained" color="primary" onClick={()=>{
          addAttributeRow()
        }}> +</Button>
      </TableContainer>


     
    </>
  );
}

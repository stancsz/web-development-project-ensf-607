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
  const ediOutcomes=(id,outcome)=>{
    let indx = outcomes.findIndex((row) => row.id === id)
    let newOutcomes=outcomes
    if(indx>=0)
    newOutcomes[indx]={id:id,outcome:outcome}
    else
    newOutcomes.push({id:id,outcome:outcome})
  
    setOutcomes(newOutcomes)
    //console.log(outcomes)
  }


    const saveRow= (id) => {
      
      let numIndx = outcomes.findIndex((row) => row.id === id)
      
      let num=numbers[numIndx].num
      let outcomeIndx=outcomes.findIndex((outcome)=> outcome.id===id)
      let outcome=outcomes[outcomeIndx].outcome
      let rowIndx = rows.findIndex((row) => row.id === id)
      let newRows=rows
      newRows[rowIndx]={ id: id,num:num,outcome: outcome }
          
      
 
     setRows(newRows)
     console.log(rows)

      
  };


  const removeRow = (id) => {
    let newRows = rows.filter((row) => row.id !== id)
    
    setRows(newRows)
  }
  const addRow = (id) => {
    let newRows = rows
    setCount(count+1)
    let x=count
    console.log("THIS IS "+x)
    newRows.push({ id: x, outcome: "" })
    setRows(newRows)
    console.log(rows)
  }

  return (
    <>
      <br />
      <label className="label is-size-3 has-text-left pl-1">2. Learning Outcomes</label>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <colgroup>
            <col width="10%" />
            <col width="70%" />

          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell align="right">Learning Outcome</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                <TextField id="standard-basic"   onChange={(e) => {
        
        editNums(row.id,e.target.value)
      }} />
                </TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e) => {
        
                  ediOutcomes(row.id,e.target.value)
                }} /></TableCell>

                <div className={classes.root}>
                  <Grid container spacing={3}>
                    <Grid item xs>
                      <Paper className={classes.paper}><Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        size="small"
                        startIcon={<DeleteIcon />}
                        onClick={()=>
                        removeRow(row.id)}
                      >
                        Delete
      </Button></Paper>
                    </Grid>
                    <Grid item xs>
                      <Paper className={classes.paper}><Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                        onClick={()=>{
                          saveRow(row.id)
                        }}
                        
                      >
                        Save
      </Button></Paper>
                    </Grid>

                  </Grid>
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
    </>
  );
}

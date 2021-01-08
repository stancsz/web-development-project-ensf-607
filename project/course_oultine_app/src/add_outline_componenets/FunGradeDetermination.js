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


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});





export default function BasicTable(props) {

  const [count, setCount] = useState(2);
  const classes = useStyles();
  const[save,setSave]=useState(false)
  const [grade,setGrade]=useState([{id:1,Component:"",LearningOutcome:"",Weight:""}])

const[total,setTotal]=useState(0.0)
 


  const editGrade=(id,Component,LearningOutcome,Weight)=>{
      if(id!==""){
    let indx = grade.findIndex((row) => row.id === id)
    let newGrade=grade
    
    if(Component!=="")
    newGrade[indx].Component=Component
    if(LearningOutcome!=="")
    newGrade[indx].LearningOutcome=LearningOutcome
    if(Weight!=="")
    newGrade[indx].Weight=Weight
 
    
  
    setGrade(newGrade)}
    //setRows(newRows)
    let temp=0
    for(let i=0;i<grade.length;i++)
    {
        if(grade[i].Weight!=="")
    temp+=parseFloat(grade[i].Weight)
    

}

    setTotal(temp)
   
  }
  


  


  const removeRow = (id) => {
    let newRows = grade.filter((row) => row.id !== id)
   
    let indx = grade.findIndex((row) => row.id === id)
    let temp=grade[indx].Weight
    console.log(temp)
    if(temp!=="")
    setTotal(total-parseFloat(temp))
    setGrade(newRows)

    
  }
  

  const addRow = () => {
    // console.log(...rows)

    let newRows = grade
    setCount(count+1)
    //console.log(newRows)
   


    newRows.push({ id: count,Componenet:"",LearningOutcome:"",Weight:"" })
    setGrade(newRows)
   // console.log(rows)
  }
const updateTotal=(value)=>{
    setCount(count+value)
    
    setTotal(total+2)
    console.log(count)
    
}
useEffect(()=>{

if(save && parseInt(total)!==100)
{
   alert("Cant save total must be 100") 
   setSave(false)
}
},[save])
  





  return (
    <>
    <div className="pt-2 pb-2" align="right">
            <Button variant="outlined" color="secondary" onClick={()=>{
                setSave(true)
            }}>
              <SaveIcon />
            </Button>
          </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <colgroup>
            <col width="30%" />
            <col width="30%" />
            <col width="30%" />
            
            

          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>Componenet</TableCell>
              <TableCell align="right">Lerning Outcome</TableCell>
              <TableCell align="right">Weight</TableCell>
              

            </TableRow>
          </TableHead>
          <TableBody>
            
            {grade.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">

                <TextField id="standard-basic"  
                inputProps={{style: { textAlign: 'center' }}}
                 onChange ={(e)=>{ editGrade(row.id,e.target.value,"","")}}
                 />

                </TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{  
                editGrade(row.id,"",e.target.value,"")
        }
                } /></TableCell>
                <TableCell align="right"><TextField  id="standard-basic" fullWidth={true} onChange={(e)=>{
                    if(e.target.value>0 && e.target.value<100)
                     {editGrade(row.id,"","",e.target.value)
                     
                    

                }
                     else
                    { 
                    e.target.value=""
            }
                    }
                } /></TableCell>
               

                <div className={classes.root}>
                    <br/>
                    <DeleteIcon  onClick={()=>{ removeRow(row.id)
                    }
                   } />

                    
                </div>

              </TableRow>
            ))}
            <TableRow >
        <TableCell></TableCell>
        <TableCell>Total:</TableCell>
        <TableCell align="right">{total} %</TableCell>
        </TableRow>
          </TableBody>
        </Table>
        <br />
        <Button variant="contained" color="primary" onClick={()=>{
          addRow()
          editGrade("","","","")
        }}> +</Button>
      </TableContainer>
      

     
    </>
  );
}

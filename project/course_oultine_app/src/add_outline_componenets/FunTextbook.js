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
  
  const [textbook,setTextbook]=useState([{id:1,Title:"",Author:"",Edition:"",Publisher:""}])


 


  const editTextbook=(id,Title,Author,Edition,Publisher)=>{
    let indx = textbook.findIndex((row) => row.id === id)
    let newBook=textbook
    
    if(Title!=="")
    newBook[indx].Title=Title
    if(Author!=="")
    newBook[indx].Author=Author
    if(Edition!=="")
    newBook[indx].Edition=Edition
    if(Publisher!=="")
    newBook[indx].Publisher=Publisher
    
  
    setTextbook(newBook)
    //setRows(newRows)
   
  }
  

  


  const removeRow = (id) => {
    let newRows = textbook.filter((row) => row.id !== id)
    
   
    setTextbook(newRows)
  }
  

  const addRow = () => {
    // console.log(...rows)

    let newRows = textbook
    setCount(count+1)
    //console.log(newRows)
   


    newRows.push({ id: count,Title:"",Author:"",Edition:"",Publisher:"" })
    setTextbook(newRows)
   // console.log(rows)
  }


  





  return (
    <>
    <div className="pt-2 pb-2" align="right">
            <Button variant="outlined" color="secondary">
              <SaveIcon />
            </Button>
          </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <colgroup>
            <col width="30%" />
            <col width="70%" />
            
            

          </colgroup>
         
          <TableBody>
            
            {textbook.map((row) => (
                <>
                <br/>
                
              <TableRow key={row.id}>
                
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} value="TextBook" readOnly={true}
                 /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editTextbook(row.id,e.target.value,"","","")}
                } /></TableCell>
                
                </TableRow>
                
                <TableRow key={row.id}>
                
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} value="Author" readOnly={true}
                 /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editTextbook(row.id,"",e.target.value,"","")}
                } /></TableCell>
                
                </TableRow>

                <TableRow key={row.id}>
                
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} value="Edition" readOnly={true}
                 /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editTextbook(row.id,"","",e.target.value,"")}
                } /></TableCell>
                
                </TableRow>
                
                <TableRow key={row.id}>
                
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} value="Publisher" readOnly={true}
                 /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editTextbook(row.id,"","","",e.target.value)}
                } /></TableCell>
                
                </TableRow>
                <div className={classes.root}>
                    <br/>
                    <DeleteIcon  onClick={()=> removeRow(row.id)} />

                    
                </div>
                </>
              
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

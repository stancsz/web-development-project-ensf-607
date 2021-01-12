import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';

import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});





export default function BasicTable(props) {

  const [count, setCount] = useState(3);
  const classes = useStyles();
  
  const [textbook,setTextbook]=useState([{id:1,Title:"",Author:"",Edition:"",Publisher:"",Type:"Required"},{id:2,Title:"",Author:"",Edition:"",Publisher:"",Type:"Recommended"}])


 


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
  const save=()=>{
    let newJSON=[]
    for(let i=0;i<textbook.length;i++){
      newJSON.push({CourseID:"",TITLE:textbook[i].Title,Publisher:textbook[i].Publisher,Author:textbook[i].Author,Edition:textbook[i].Edition,type:textbook[i].Type})
    }
    props.setTextbook(newJSON)
  }

  


  const removeRow = (id) => {
    let newRows = textbook.filter((row) => row.id !== id)
    
   
    setTextbook(newRows)
  }
  

  const addRecommendedRow = () => {
    // console.log(...rows)

    let newRows = textbook
    setCount(count+1)
    //console.log(newRows)
   


    newRows.push({ id: count,Title:"",Author:"",Edition:"",Publisher:"" ,Type:"Recommended"})
    setTextbook(newRows)
   // console.log(rows)
  }
  const addRequiredRow = () => {
    // console.log(...rows)

    let newRows = textbook
    setCount(count+1)
    //console.log(newRows)
   


    newRows.push({ id: count,Title:"",Author:"",Edition:"",Publisher:"" ,Type:"Required"})
    setTextbook(newRows)
   // console.log(rows)
  }

  





  return (
    <>
    <div className="pt-2 pb-2" align="right">
            <Button variant="outlined" color="secondary" onClick={()=>save()}>
              <SaveIcon />
            </Button>
          </div>
          <label className="label has-text-info is-size-5 has-text-left" color="Primary">
                The following textbook(s) is required for this course:
              </label>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <colgroup>
            <col width="30%" />
            <col width="70%" />
            
            

          </colgroup>
          
          <TableBody>
            
            {textbook.map((row) => {
                
                if(row.Type==="Required")
                return(
                
                <>
                
                <br/>
                
              <TableRow >
                
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} value="TextBook" readOnly={true}
                 /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editTextbook(row.id,e.target.value,"","","")}
                } /></TableCell>
                
                </TableRow>
                
                <TableRow >
                
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} value="Author" readOnly={true}
                 /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editTextbook(row.id,"",e.target.value,"","")}
                } /></TableCell>
                
                </TableRow>

                <TableRow >
                
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} value="Edition" readOnly={true}
                 /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editTextbook(row.id,"","",e.target.value,"")}
                } /></TableCell>
                
                </TableRow>
                
                <TableRow >
                
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
              
            );}
            )}
          </TableBody>
        </Table>
        <br />
        <Button variant="contained" color="primary" onClick={()=>{
          addRequiredRow()
        }}> +</Button>
      </TableContainer>
      <br/>
      <label className="label has-text-info is-size-5 has-text-left" color="Primary">
      The following textbook(s) is recommended for this course:
              </label>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <colgroup>
            <col width="30%" />
            <col width="70%" />
            
            

          </colgroup>
          
          <TableBody>
            
            {textbook.map((row) =>{ 
                if (row.Type==="Recommended")
                return (
                <>
                <br/>
                
              <TableRow >
                
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} value="TextBook" readOnly={true}
                 /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editTextbook(row.id,e.target.value,"","","")}
                } /></TableCell>
                
                </TableRow>
                
                <TableRow >
                
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} value="Author" readOnly={true}
                 /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editTextbook(row.id,"",e.target.value,"","")}
                } /></TableCell>
                
                </TableRow>

                <TableRow>
                
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} value="Edition" readOnly={true}
                 /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editTextbook(row.id,"","",e.target.value,"")}
                } /></TableCell>
                
                </TableRow>
                
                <TableRow >
                
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
              
            );})}
          </TableBody>
        </Table>
        <br />
        <Button variant="contained" color="primary" onClick={()=>{
          addRecommendedRow()
        }}> +</Button>
      </TableContainer>
     
    </>
  );
}

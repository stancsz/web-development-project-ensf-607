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
  
 
  const [coordinator,setCoordinator]=useState({CourseID:"",FName:"",LName:"",Phone:"",Office:"",Email:""})
  const [instructor,setInstructor]=useState([{id:1,CourseID:"",SectionNum:"",FName:"",LName:"",Phone:"",Office:"",Email:""}])
  const [ta,setTa]=useState([{id:1,CourseID:"",SectionNum:"",FName:"",LName:"",Phone:"",Office:"",Email:""}])

 





const editCoordinator=(FName,LName,Phone,Office,Email)=>{
    let temp=coordinator
if(FName!=="")
temp.FName=FName
if(LName!=="")
temp.LName=LName
if (Phone!=="")
temp.Phone=Phone
if(Office!=="")
temp.Office=Office
if(Email!=="")
temp.Email=Email

setCoordinator(temp)


}
const editInstructor=(id,Section,FName,LName,Phone,Office,Email)=>{
    let indx = instructor.findIndex((row) => row.id === id)
    let temp=instructor
    if(Section!=="")
    temp[indx].SectionNum=Section
    if(FName!=="")
    temp[indx].FName=FName
    if(LName!=="")
    temp[indx].LName=LName
    if (Phone!=="")
    temp[indx].Phone=Phone
    if(Office!=="")
    temp[indx].Office=Office
    if(Email!=="")
    temp[indx].Email=Email
    
    setInstructor(temp)
    //console.log(instructor)
    
}

const editTa=(id,Section,FName,LName,Phone,Office,Email)=>{
    let indx = ta.findIndex((row) => row.id === id)
    let temp=ta
    if(Section!=="")
    temp[indx].SectionNum=Section
    if(FName!=="")
    temp[indx].FName=FName
    if(LName!=="")
    temp[indx].LName=LName
    if (Phone!=="")
    temp[indx].Phone=Phone
    if(Office!=="")
    temp[indx].Office=Office
    if(Email!=="")
    temp[indx].Email=Email
    
    setTa(temp)
    console.log(ta)
    
}
  const removeInstructor = (id) => {
    let newRows = instructor.filter((row) => row.id !== id)
    
   
    setInstructor(newRows)
  }
  
  const removeTa = (id) => {
    let newRows = ta.filter((row) => row.id !== id)
    
   
    setTa(newRows)
  }

  const addInstructor = () => {
    // console.log(...rows)

    let newRows = instructor
    setCount(count+1)
    //console.log(newRows)
   


    newRows.push({ id: count,CourseID:"",SectionNum:"",FName:"",LName:"",Phone:"",Office:"",Email:""})
    setInstructor(newRows)
   // console.log(rows)
  }
  const addTa = () => {
    // console.log(...rows)

    let newRows = ta
    setCount(count+1)
    //console.log(newRows)
   


    newRows.push({ id: count,CourseID:"",SectionNum:"",FName:"",LName:"",Phone:"",Office:"",Email:""})
    setTa(newRows)
   // console.log(rows)
  }


  
const save=()=>{
  
  props.setCoordinator(coordinator)
  let newTaJSON=[]
  let newInstructorJSON=[]
  for(let i=0;i<ta.length;i++){
    newTaJSON.push({CourseID:ta[i].CourseID,TutorialNum:ta[i].SectionNum,FName:ta[i].FName,LName:ta[i].LName,Phone:ta[i].Phone,Office:ta[i].Office,Email:ta[i].Email})
  }
  props.setTa(newTaJSON)
  for(let i=0;i<instructor.length;i++){
    newInstructorJSON.push({CourseID:instructor[i].CourseID,LectureNum:instructor[i].SectionNum,FName:instructor[i].FName,LName:instructor[i].LName,Phone:instructor[i].Phone,Office:instructor[i].Office,Email:instructor[i].Email})
  }
  props.setInstructor(newInstructorJSON)
}




  return (
    <>
    <div className="pt-2 pb-2" align="right">
            <Button variant="outlined" color="secondary" onClick={()=>save()}>
              <SaveIcon />
            </Button>
          </div>
      <TableContainer component={Paper}>
      <label className="label has-text-info is-size-5 has-text-left" color="Primary">
                A. Course Coordinator
              </label>
        <Table className={classes.table} aria-label="simple table">
          <colgroup>
            <col width="20%" />
            <col width="20%" />
            <col width="30%" />
            <col width="10%" />
            <col width="20%" />
            

          </colgroup>
          <TableHead>
            <TableRow>
            
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Family Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Office</TableCell>
              <TableCell align="right">Email</TableCell>
          

            </TableRow>
          </TableHead>
          <TableBody>
            
            
              <TableRow >
              <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editCoordinator(e.target.value,"","","","")}
                } /></TableCell>

                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editCoordinator("",e.target.value,"","","")}
                } /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editCoordinator("","",e.target.value,"","")}
                } /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editCoordinator("","","",e.target.value,"")}
                }/></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editCoordinator("","","","",e.target.value)}
                } /></TableCell>

           

              </TableRow>
            
          </TableBody>
        </Table>
        <br />
        
      </TableContainer>
      <TableContainer component={Paper}>
      <label className="label has-text-info is-size-5 has-text-left" color="Primary">
                B. Course Instructors
              </label>
        <Table className={classes.table} aria-label="simple table">
          <colgroup>
          <col width="10%" />
            <col width="20%" />
            <col width="20%" />
            <col width="30%" />
            <col width="5%" />
            <col width="15%" />
            
          </colgroup>
          <TableHead>
            <TableRow>
            <TableCell align="right">Section Number</TableCell>
            <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Family Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Office</TableCell>
              <TableCell align="right">Email</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            
            {instructor.map((row) => (
              <TableRow key={row.id}>
                   <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editInstructor(row.id,e.target.value,"","","","","")}
                } /></TableCell>
                   <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editInstructor(row.id,"",e.target.value,"","","","")}
                } /></TableCell>

                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editInstructor(row.id,"","",e.target.value,"","","")}
                } /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editInstructor(row.id,"","","",e.target.value,"","")}
                } /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editInstructor(row.id,"","","","",e.target.value,"")}
                }/></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editInstructor(row.id,"","","","","",e.target.value)}
                } /></TableCell>

           

                <div className={classes.root}>
                    <br/>
                    <DeleteIcon  onClick={()=> removeInstructor(row.id)} />

                    
                </div>

              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br />
        <Button variant="contained" color="primary" onClick={()=>{
          addInstructor()
        }}> +</Button>
      </TableContainer>
      <TableContainer component={Paper}>
      <label className="label has-text-info is-size-5 has-text-left" color="Primary">
                C. Course TAs
              </label>
        <Table className={classes.table} aria-label="simple table">
          <colgroup>
          <col width="10%" />
            <col width="20%" />
            <col width="20%" />
            <col width="30%" />
            <col width="5%" />
            <col width="15%" />
            
          </colgroup>
          <TableHead>
            <TableRow>
            <TableCell align="right">Section Number</TableCell>
            <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Family Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Office</TableCell>
              <TableCell align="right">Email</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            
            {ta.map((row) => (
              <TableRow key={row.id}>
                   <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editTa(row.id,e.target.value,"","","","","")}
                } /></TableCell>
                   <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editTa(row.id,"",e.target.value,"","","","")}
                } /></TableCell>

                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editTa(row.id,"","",e.target.value,"","","")}
                } /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editTa(row.id,"","","",e.target.value,"","")}
                } /></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editTa(row.id,"","","","",e.target.value,"")}
                }/></TableCell>
                <TableCell align="right"><TextField id="standard-basic" fullWidth={true} onChange={(e)=>{ editTa(row.id,"","","","","",e.target.value)}
                } /></TableCell>

           

                <div className={classes.root}>
                    <br/>
                    <DeleteIcon  onClick={()=> removeTa(row.id)} />

                    
                </div>

              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br />
        <Button variant="contained" color="primary" onClick={()=>{
          addTa()
        }}> +</Button>
      </TableContainer>
     
    </>
  );
}

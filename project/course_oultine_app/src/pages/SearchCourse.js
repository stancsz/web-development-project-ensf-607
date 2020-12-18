import React, { useState } from 'react';
import Info from "../search_componenets/SearchInfo"
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import InfoData from "../data/FunInfoData.json"
 import OutcomeData from "../data/DataOutcome.json"
 import GradesData from "../data/DataGrades.json"
import InfoData from '../data/DataInfo.json'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Outcome from '../search_componenets/SearchOutcome'
import Grade from '../search_componenets/SearchGrade'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    
  }, 
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SearchCourse =()=> {
    const courseList=Object.keys(InfoData)
    const classes = useStyles();
  
    const [course, setCourse] = React.useState('');
    const handleChange = (event) => {
        setCourse(event.target.value);
      };
      const [outcome,setOutcome]=useState({})
      const[grade,setGrade]=useState({})
      const [info,setInfo]=useState({})
      const handleSelect =()=>{
       let tempInfo = InfoData[course]
       let tempGrade=GradesData[course]
       let tempOutcome=OutcomeData[course]
       setOutcome(tempOutcome)
       setInfo(tempInfo)
       setGrade(tempGrade)
       //console.log(tempOutcome)
      }
    return (

        <>
        
      
        
      <Grid container spacing={2}>
        <Grid item xs>
          <Paper className={classes.paper}>
        
          <FormControl className={classes.formControl}>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={course}
          onChange={(e)=>{
              //console.log(e.target)
              handleChange(e)
          }}
        

        >
            {courseList.map((i)=>(
            <MenuItem value={i}>{i}</MenuItem>
            ))}
          
        
        </Select>
      </FormControl>
        <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
        
        
        </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Button variant="outlined" color="secondary" fullWidth={true} onClick={()=>{handleSelect()}}>
  Select
</Button></Paper>
        </Grid>
      
      </Grid>
        
        <Info info={info}/>
        <Outcome outcome={outcome}/>
        <Grade grade={grade}/>
        
        </>
    )

}
export default SearchCourse
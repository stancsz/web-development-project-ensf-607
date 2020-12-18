import React from 'react';
import Info from "../search_componenets/SearchInfo"
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
// import InfoData from "../data/FunInfoData.json"
// import OutcomeData from "../data/FunOutcomeData.json"
// import GradesData from "../data/FunGradesData.json"
import InfoData from '../data/DataInfo.json'
const useStyles = makeStyles((theme) => ({
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
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
      };
    return (

        <>
        
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={0}
          onChange={handleChange}
        >
            {courseList.map((i)=>(
            <MenuItem>{i}</MenuItem>
            ))}
          
        
        </Select>
      </FormControl>
        <Info/>
        <h1>This is search panel</h1>
        </>
    )

}
export default SearchCourse
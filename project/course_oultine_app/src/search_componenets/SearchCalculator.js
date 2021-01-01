import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function SearchCalculator(props) {
 
  
  const classes = useStyles();

  return (
    <>
     <label className="label is-size-3 has-text-left pl-1">6. Use of Calculators in Examinations</label>

    <TextField multiline fullWidth placeholder = "Calculators are not allowed during examinations." >

    </TextField>

    </>
  );
}

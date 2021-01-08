import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function SearchTA(props) {
 
  
  const classes = useStyles();
  const keys=Object.keys(props.assistants)
  console.log(props)

  return (
    <>
    <div align = "left"><u>Teaching Assistants</u></div>
    <br/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Section</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Family Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Office</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
        {keys.map((key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">{props.assistants[key].TutorialNum}</TableCell>
              <TableCell align="right">{props.assistants[key].FName}</TableCell>
              <TableCell align="right">{props.assistants[key].LName}</TableCell>
              <TableCell align="right">{props.assistants[key].Phone}</TableCell>
              <TableCell align="right">{props.assistants[key].Office}</TableCell>
              <TableCell align="right">{props.assistants[key].Email}</TableCell>
            </TableRow>
          ))}       
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

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



export default function SearchTimetable(props) {
  
  const classes = useStyles();

  let keys = []
  props.timetable === undefined ? keys = undefined : keys=Object.keys(props.timetable)


  return (
    <>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Section</TableCell>
            <TableCell align="right">Day(s) of the Week</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Location</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {keys === undefined ? "Data Missing" : keys.map((key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {props.timetable[key].SectionNum}
              </TableCell>
              <TableCell align="right">{props.timetable[key].Days}</TableCell>
              <TableCell align="right">{props.timetable[key].Time}</TableCell>
              <TableCell align="right">{props.timetable[key].Location}</TableCell>
              
            </TableRow>
          ))}
        
          
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

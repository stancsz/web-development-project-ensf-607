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



export default function SearchOutcome(props) {

  let keys = []
  props.outcome === undefined ? keys = undefined : keys=Object.keys(props.outcome)
  
  const classes = useStyles();

  return (
    <>
    <p align = "center">At the end of this course, you will be able to:</p>
    <br/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell align="right">Outcome</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {keys === undefined ? "Data Missing" : keys.map((key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {props.outcome[key].OutcomeNum}
              </TableCell>
              <TableCell align="right">{props.outcome[key].Description}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

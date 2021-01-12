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



export default function SearchTextbook(props) {

  let keys = []
  let requiredKeys = []
  let recommendedKeys = []

  if(props.textbook === undefined){
    keys = undefined;
  }
  else{
    keys = Object.keys(props.textbook);
    requiredKeys = keys.filter(key => props.textbook[key].type === "Required");
    recommendedKeys = keys.filter(key => props.textbook[key].type === "Recommended");
  }

  const classes = useStyles();

  return (
    <>
     <p>The following textbook(s) is required for this course:</p>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Author(s)</TableCell>
            <TableCell align="right">Edition, Year</TableCell>
            <TableCell align="right">Publisher</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {keys === undefined ? <TableRow></TableRow> : requiredKeys.map((key) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row">
                                    {props.textbook[key].TITLE}
                                </TableCell>
                                <TableCell align="right">
                                    {props.textbook[key].Author}
                                </TableCell>
                                <TableCell align="right">
                                   {props.textbook[key].Edition}
                                </TableCell>
                                <TableCell align="right">
                                    {props.textbook[key].Publisher}
                                </TableCell>
                            </TableRow>
                        ))}
        </TableBody>
      </Table>
    </TableContainer>

    <br/>
    <p>The following textbook(s) is recommended for this course:</p>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="right">Title</TableCell>
            <TableCell align="right">Author(s)</TableCell>
            <TableCell align="right">Edition, Year</TableCell>
            <TableCell align="right">Publisher</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {keys === undefined ? <TableRow></TableRow> : recommendedKeys.map((key) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row">
                                    {props.textbook[key].TITLE}
                                </TableCell>
                                <TableCell align="right">
                                    {props.textbook[key].Author}
                                </TableCell>
                                <TableCell align="right">
                                   {props.textbook[key].Edition}
                                </TableCell>
                                <TableCell align="right">
                                    {props.textbook[key].Publisher}
                                </TableCell>
                            </TableRow>
                        ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>
  );
}

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



export default function SearchExaminations(props) {
 
  
  const classes = useStyles();

  return (
    <>
     <p>The following examinations will be held in this course:</p>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">List #</TableCell>
            <TableCell align="right">Content</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        </TableBody>
      </Table>
    </TableContainer>

    <br/>
   
    <TextField multiline fullWidth placeholder = "All examinations will be closed book and closed notes." >

    </TextField>

    <TextField multiline fullWidth placeholder = "Note: The timetable for Registrar Scheduled exams can be found at the University's Enrolment Services website, http://www.ucalgary.ca/registrar/. " >

    </TextField>



    </>
  );
}

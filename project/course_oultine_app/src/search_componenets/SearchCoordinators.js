import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SearchCoordinators(props) {
  console.log(props.coordinators);

  const classes = useStyles();

  return (
    <>
      <div align="left">
        <u>Course Coordinator</u>
      </div>
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow key ="stfu">
              <TableCell>First Name</TableCell>
              <TableCell align="right">Family Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Office</TableCell>
              <TableCell align="right">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>



      <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>FName</TableCell>
                            <TableCell>LName</TableCell>
                            <TableCell>Phone</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
      {props.coordinators.map((prop) => (
        <TableRow key = {prop.key}>
          <TableCell component="th" scope="row">
            {prop.FName}
          </TableCell>
          <TableCell align="right">
            {prop.LName}
          </TableCell>
          <TableCell align="right">{prop.Phone}</TableCell>
        </TableRow>
      ))}
         </TableBody>
                </Table>
            </TableContainer>

      <br />
    </>
  );
}

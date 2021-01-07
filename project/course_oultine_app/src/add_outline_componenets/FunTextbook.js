import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function FunTextbook(props) {
  const classes = useStyles();

  const [count, setCount] = useState(2);
  const [rows, setRows] = useState([{ id: 1, outcome: "" }]);

  const removeRow = (id) => {
    let newRows = rows.filter((row) => row.id !== id);
    setRows(newRows);
  };
  const addRow = (id) => {
    let newRows = rows;
    setCount(count + 1);
    let x = count;
    console.log("THIS IS " + x);
    newRows.push({ id: x, outcome: "" });
    setRows(newRows);
    console.log(rows);
  };

  return (
    <>
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
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <TextField
                    id="standard-basic"
                    onChange={(e) => {
                      //editNums(row.id,e.target.value)
                    }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    id="standard-basic"
                    fullWidth={true}
                    onChange={(e) => {
                      //ediOutcomes(row.id,e.target.value)
                    }}
                  />
                </TableCell>

                <TableCell>
                  <TextField
                    id="standard-basic"
                    onChange={(e) => {
                      //ediOutcomes(row.id,e.target.value)
                    }}
                  />
                </TableCell>

                <TableCell>
                  <TextField
                    id="standard-basic"
                    onChange={(e) => {
                      //ediOutcomes(row.id,e.target.value)
                    }}
                  />
                </TableCell>

                <div className={classes.root}>
                  <br />
                  <DeleteIcon onClick={() => removeRow(row.id)} />
                </div>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            addRow();
          }}
        >
          {" "}
          +
        </Button>
      </TableContainer>
    </>
  );
}

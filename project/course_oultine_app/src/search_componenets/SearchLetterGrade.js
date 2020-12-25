import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function SearchLetter(props) {
    // console.log(props.grade)
    const keys=Object.keys(props.letter)
    console.log(keys)

    const classes = useStyles();

    // return(<>
    //     </>);

    return (
        <>
            <label className="label is-size-5 has-text-left pl-1">Letter Grades</label>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Letter Grade</TableCell>
                            <TableCell>Lower Boundary</TableCell>
                            <TableCell>T</TableCell>
                            <TableCell>Upper Boundary</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {keys.map((key) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row">
                                    {props.letter[key]["Letter Grade"]}
                                </TableCell>
                                <TableCell align="right">
                                    {props.letter[key]["Lower Boundary"]}
                                </TableCell>
                                <TableCell align="right">
                                    ≤ T &lt;
                                </TableCell>
                                <TableCell align="right">
                                    {props.letter[key]["Upper Boundary"]}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    );
}
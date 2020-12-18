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

export default function SearchGrade(props) {
    // console.log(props.grade)
    const keys=Object.keys(props.grade)
    console.log(keys)

    const classes = useStyles();

    // return(<>
    //     </>);

    return (
        <>
            <label className="label is-size-3 has-text-left pl-1">7. Final Grade Determination</label>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Component</TableCell>
                            <TableCell>Learning Outcome(s) Evaluated</TableCell>
                            <TableCell>Weight</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {keys.map((key) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row">
                                    {props.grade[key].Component}
                                </TableCell>
                                <TableCell align="right">
                                    {props.grade[key]["Learning Outcome(s) Evaluated"]}
                                </TableCell>
                                <TableCell align="right">
                                    {props.grade[key].Weight}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
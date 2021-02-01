import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from "@material-ui/core/styles";
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function SearchGrade(props) {

    let keys = []
    props.gradeDetermination === undefined ? keys = undefined : keys=Object.keys(props.gradeDetermination)

    const classes = useStyles();

    return (
        <>
            <p>The final grade in this course will be based on the following components:</p>

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
                        {keys === undefined ? "Data Missing" : keys.map((key) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row">
                                    {props.gradeDetermination[key].Component}
                                </TableCell>
                                <TableCell align="right">
                                    {props.gradeDetermination[key].OutcomeEvaluated}
                                </TableCell>
                                <TableCell align="right">
                                    {props.gradeDetermination[key].Weight}
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Container maxWidth="md">
            <div align="right">
                <b>Total:</b> {Object.values(props.gradeDetermination).reduce((a,b) => a + b.Weight, 0)}%
            </div>
            </Container>
        </>
    );
}
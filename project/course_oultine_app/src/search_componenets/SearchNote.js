import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function SearchNote(props) {
    // console.log(props.grade)
    //const keys=Object.keys(props.note)
    //console.log(keys)

    //const classes = useStyles();

    // return(<>
    //     </>);

    return (
        <>
           {/*  <label className="label is-size-5 has-text-left pl-1">Notes</label>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Note Content</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {keys.map((key) => (
                        <TableRow key={key}>
                            <TableCell component="th" scope="row">
                                {props.note[key].NoteNum})
                            </TableCell>
                            <TableCell align="right">
                                {props.note[key]["Note Message"]}
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer> */}

        <div align="left">
        <b>
        Notes:
        </b>
        
        <Typography>
        Placeholder: Examination notes.
        </Typography>
        </div>

        </>
    );
}
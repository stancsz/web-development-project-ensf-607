import React, {useReducer, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { Container } from '@material-ui/core';

const FunGrade=()=> {
    var defaultTexts = ["a) You must either achieve at least 50% on the final exam or achieve at least 50% on the weighted average of the midterm and final exam. You must also achieve an average of at least 50% on the lab section of the course. If you do not satisfy these caveats, you will not receive a passing grade.",
        "b) Circumstances beyond one’s control (e.g. sickness, etc.), leading to missing lab session and/or delays in assignment submissions should be discussed with the course instructor as soon as possible. Proper documentation must be provided.",
        "c) Conversion from a score out of 100 to a letter grade will be done using the conversion chart shown below. This grading scale can only be changed during the term if the grades will not be lowered."]
    return (
        <div className="FunGrade">
            {/*<h1> This is the Grade Section</h1>*/}
            <p align="left">The final grade in this course will be based on the following components:</p>
            <div align="center"><FinalGradeTable/></div>
            <div class="content" align="center">
                <h5 className="subtitle is-4" align="left"> Notes: </h5>
                <Notes/>

            </div>
            <label className="label is-size-5 has-text-left pl-1">Letter Grades</label>
            <div align="center"><LetterGradeTable/></div>
        </div>
        
    );
}


// The first table
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


function FinalGradeTable() {

    const [gradeTotal, setGradeTotal] = useState(0)
    const [enteredVals, setEnteredVals] = useState([{id:1, val: 0}])
    const [gradeCheck, setGradeCheck] = useState(true);
    const [toggleError, setToggleError] = useState(false);
    const [errorHelper, setErrorHelper] = useState("")

    const editGradeTotal=(id, enteredVal)=>{
        let indx = enteredVals.findIndex((row) => row.id === id)
        let newVal = enteredVals        
        if(indx >= 0)
            newVal[indx]={id:id, val:enteredVal}
        else
            newVal.push({id:id,  val:enteredVal})
        setEnteredVals(newVal)
        let gradeTotalTemp = newVal.reduce((x, y) => x = x + +y.val, 0)
        if(gradeTotalTemp > 100){
            setGradeTotal(100)
            setToggleError(true)
            setGradeCheck(false)
            setErrorHelper("Enter ints totalling 100");
        }
        else if(gradeTotalTemp < 0){
            setGradeTotal(0)
            setToggleError(true)
            setGradeCheck(false)
            setErrorHelper("Enter ints totalling 100");
        }
        else if(isNaN(gradeTotalTemp)){
            setGradeTotal(0)
            setToggleError(true)
            setGradeCheck(false)
            setErrorHelper("Enter ints totalling 100");
        }
        else if(gradeTotalTemp !== parseInt(gradeTotalTemp)){
            setGradeTotal(0)
            setToggleError(true)
            setGradeCheck(false)
            setErrorHelper("Enter ints totalling 100");
        }
        else{
            setGradeTotal(gradeTotalTemp)
            setToggleError(false)
            setGradeCheck(true)
            setErrorHelper("");
        }
            
    }




    const [count, setCount] = useState(2);
    const classes = useStyles();
    const [rows, setRows] = useState([{ id: 1,  outcome: "" }]);
    const [numbers,setNumbers]=useState([{id:1,num:1}])
    const [outcomes,setOutcomes]=useState([{id:1,outcome:""}])

    const editNums=(id,num)=>{
        let indx = numbers.findIndex((num)=>num.id===id)
        let newNums=numbers
        //console.log(indx)
        if(indx>=0)
            newNums[indx]={id:id,num:num}
        else
            newNums.push({id:id,num:num})

        setNumbers(newNums)
        // console.log(numbers)
    }
    const ediOutcomes=(id,outcome)=>{
        let indx = outcomes.findIndex((row) => row.id === id)
        let newOutcomes=outcomes
        if(indx>=0)
            newOutcomes[indx]={id:id,outcome:outcome}
        else
            newOutcomes.push({id:id,outcome:outcome})
        setOutcomes(newOutcomes)
        //console.log(outcomes)
    }

    const saveRow= (id) => {
        let numIndx = outcomes.findIndex((row) => row.id === id)
        let num=numbers[numIndx].num
        let outcomeIndx=outcomes.findIndex((outcome)=> outcome.id===id)
        let outcome=outcomes[outcomeIndx].outcome
        let rowIndx = rows.findIndex((row) => row.id === id)
        let newRows=rows
        newRows[rowIndx]={ id: id,num:num,outcome: outcome }
        setRows(newRows)
        console.log(rows)
    };

    const removeRow = (id) => {
        let newRows = rows.filter((row) => row.id !== id)

        setRows(newRows)
    }
    const addRow = (id) => {
        let newRows = rows
        setCount(count+1)
        let x=count
        console.log("THIS IS "+x)
        newRows.push({ id: x, outcome: "" })
        setRows(newRows)
        console.log(rows)
    }
    return (
        <>
            <br />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <colgroup>
                        <col width="20%" />
                        <col width="40%" />
                        <col width="20%" />

                    </colgroup>
                    <TableHead>
                        <TableRow>
                            <TableCell>Component</TableCell>
                            <TableCell>Learning Outcome(s) Evaluated</TableCell>
                            <TableCell>Weight</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    <TextField id="standard-basic" onChange={(e) => {

                                        editNums(row.id,e.target.value)
                                    }} />
                                </TableCell>
                                <TableCell><TextField id="standard-basic" fullWidth={true} onChange={(e) => {

                                    ediOutcomes(row.id,e.target.value)
                                }} />
                                </TableCell>

                                <TableCell >
                                <TextField error={toggleError}  helperText={errorHelper}
                                id="standard-basic" onChange={(e) => {

                                    if(e.target.value > 100)
                                        e.target.value = 100
                                    else if(e.target.value < 0)
                                        e.target.value = 0
                                

                                    ediOutcomes(row.id,e.target.value)
                                    editGradeTotal(row.id,e.target.value)

                                }} />
                                </TableCell>


                                <div className={classes.root} align="center">
                                    <Grid container spacing={3}>
                                        <Grid item xs>
                                            <Paper className={classes.paper}><Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                                size="small"
                                                startIcon={<DeleteIcon />}
                                                onClick={()=>
                                                    removeRow(row.id)}
                                            >
                                                Delete
                                            </Button></Paper>
                                        </Grid>
                                        <Grid item xs>
                                            <Paper className={classes.paper}><Button
                                                variant="contained"
                                                color="primary"
                                                size="small"
                                                className={classes.button}
                                                startIcon={<SaveIcon />}
                                                onClick={()=>{
                                                    saveRow(row.id)
                                                }}
                                            >
                                                Save
                                            </Button></Paper>
                                        </Grid>

                                    </Grid>
                                </div>

                            </TableRow>
                        ))}
                    </TableBody>
                    <colgroup>
                        <col width="20%" />
                        <col width="40%" />
                        <col width="20%" >    
                        </col>
                    </colgroup>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell><b>Total:</b> {gradeTotal}%</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
                <br />
                <Button variant="contained" color="primary" onClick={()=>{
                    addRow()
                }}> +</Button>
            </TableContainer>
        </>
    );
}
// The second table
function LetterGradeTable() {
    const [count, setCount] = useState(2);
    const classes = useStyles();
    const [rows, setRows] = useState([{ id: 1,  outcome: "" }]);
    const [numbers,setNumbers]=useState([{id:1,num:1}])
    const [outcomes,setOutcomes]=useState([{id:1,outcome:""}])

    const editNums=(id,num)=>{
        let indx = numbers.findIndex((num)=>num.id===id)
        let newNums=numbers
        //console.log(indx)
        if(indx>=0)
            newNums[indx]={id:id,num:num}
        else
            newNums.push({id:id,num:num})

        setNumbers(newNums)
        // console.log(numbers)
    }
    const ediOutcomes=(id,outcome)=>{
        let indx = outcomes.findIndex((row) => row.id === id)
        let newOutcomes=outcomes
        if(indx>=0)
            newOutcomes[indx]={id:id,outcome:outcome}
        else
            newOutcomes.push({id:id,outcome:outcome})
        setOutcomes(newOutcomes)
        //console.log(outcomes)
    }

    const saveRow= (id) => {
        let numIndx = outcomes.findIndex((row) => row.id === id)
        let num=numbers[numIndx].num
        let outcomeIndx=outcomes.findIndex((outcome)=> outcome.id===id)
        let outcome=outcomes[outcomeIndx].outcome
        let rowIndx = rows.findIndex((row) => row.id === id)
        let newRows=rows
        newRows[rowIndx]={ id: id,num:num,outcome: outcome }
        setRows(newRows)
        console.log(rows)
    };

    const removeRow = (id) => {
        let newRows = rows.filter((row) => row.id !== id)

        setRows(newRows)
    }
    const addRow = (id) => {
        let newRows = rows
        setCount(count+1)
        let x=count
        console.log("THIS IS "+x)
        newRows.push({ id: x, outcome: "" })
        setRows(newRows)
        console.log(rows)
    }
    return (
        <>
            <br />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <colgroup>
                        <col width="20%" />
                        <col width="20%" />
                        <col width="20%" />
                        <col width="20%" />


                    </colgroup>
                    <TableHead>
                        <TableRow>
                            <TableCell>Letter Grade</TableCell>
                            <TableCell>Lower Boundary</TableCell>
                            <TableCell>Total Mark (T) </TableCell>
                            <TableCell>Upper Boundary</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    <TextField id="standard-basic" onChange={(e) => {

                                        editNums(row.id,e.target.value)
                                    }} />
                                </TableCell>
                                <TableCell><TextField id="standard-basic" fullWidth={true} onChange={(e) => {

                                    ediOutcomes(row.id,e.target.value)
                                }} />
                                </TableCell>

                                <TableCell ><th>≤  T  &lt;</th>
                                </TableCell>

                                <TableCell ><TextField id="standard-basic" onChange={(e) => {

                                    ediOutcomes(row.id,e.target.value)
                                }} />
                                </TableCell>


                                <div className={classes.root} align="center">
                                    <Grid container spacing={3}>
                                        <Grid item xs>
                                            <Paper className={classes.paper}><Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                                size="small"
                                                startIcon={<DeleteIcon />}
                                                onClick={()=>
                                                    removeRow(row.id)}
                                            >
                                                Delete
                                            </Button></Paper>
                                        </Grid>
                                        <Grid item xs>
                                            <Paper className={classes.paper}><Button
                                                variant="contained"
                                                color="primary"
                                                size="small"
                                                className={classes.button}
                                                startIcon={<SaveIcon />}
                                                onClick={()=>{
                                                    saveRow(row.id)
                                                }}
                                            >
                                                Save
                                            </Button></Paper>
                                        </Grid>

                                    </Grid>
                                </div>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <br />
                <Button variant="contained" color="primary" onClick={()=>{
                    addRow()
                }}> +</Button>
            </TableContainer>
        </>
    );
}

function Notes() {
    const [count, setCount] = useState(2);
    const classes = useStyles();
    const [rows, setRows] = useState([{ id: 1,  outcome: "" }]);
    const [numbers,setNumbers]=useState([{id:1,num:1}])
    const [outcomes,setOutcomes]=useState([{id:1,outcome:""}])

    const editNums=(id,num)=>{
        let indx = numbers.findIndex((num)=>num.id===id)
        let newNums=numbers
        //console.log(indx)
        if(indx>=0)
            newNums[indx]={id:id,num:num}
        else
            newNums.push({id:id,num:num})

        setNumbers(newNums)
        // console.log(numbers)
    }
    const ediOutcomes=(id,outcome)=>{
        let indx = outcomes.findIndex((row) => row.id === id)
        let newOutcomes=outcomes
        if(indx>=0)
            newOutcomes[indx]={id:id,outcome:outcome}
        else
            newOutcomes.push({id:id,outcome:outcome})
        setOutcomes(newOutcomes)
        //console.log(outcomes)
    }

    const saveRow= (id) => {
        let numIndx = outcomes.findIndex((row) => row.id === id)
        let num=numbers[numIndx].num
        let outcomeIndx=outcomes.findIndex((outcome)=> outcome.id===id)
        let outcome=outcomes[outcomeIndx].outcome
        let rowIndx = rows.findIndex((row) => row.id === id)
        let newRows=rows
        newRows[rowIndx]={ id: id,num:num,outcome: outcome }
        setRows(newRows)
        console.log(rows)
    };

    const removeRow = (id) => {
        let newRows = rows.filter((row) => row.id !== id)

        setRows(newRows)
    }
    const addRow = (id) => {
        let newRows = rows
        setCount(count+1)
        let x=count
        console.log("THIS IS "+x)
        newRows.push({ id: x, outcome: "" })
        setRows(newRows)
        console.log(rows)
    }
    return (
        <>
            <br />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <colgroup>
                        <col width="5%" />
                        <col width="5%" />
                        <col width="70%" />

                    </colgroup>
                    <TableHead>
                        <TableRow>
                            <TableCell>Note #</TableCell>
                            <TableCell></TableCell>
                            <TableCell>Note Message</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="right"><TextField id="standard-basic" onChange={(e) => {
                                    ediOutcomes(row.id,e.target.value)
                                }} /></TableCell>

                                <TableCell align="right">
                                    <p>)</p>
                                </TableCell>

                                <TableCell align="right"><TextField id="standard-basic" fullWidth={true}  onChange={(e) => {
                                    ediOutcomes(row.id,e.target.value)
                                }} /></TableCell>


                                <div className={classes.root} align="center">
                                    <Grid container spacing={3}>
                                        <Grid item xs>
                                            <Paper className={classes.paper}><Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                                size="small"
                                                startIcon={<DeleteIcon />}
                                                onClick={()=>
                                                    removeRow(row.id)}
                                            >
                                                Delete
                                            </Button></Paper>
                                        </Grid>
                                        <Grid item xs>
                                            <Paper className={classes.paper}><Button
                                                variant="contained"
                                                color="primary"
                                                size="small"
                                                className={classes.button}
                                                startIcon={<SaveIcon />}
                                                onClick={()=>{
                                                    saveRow(row.id)
                                                }}
                                            >
                                                Save
                                            </Button></Paper>
                                        </Grid>

                                    </Grid>
                                </div>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <br />
                <Button variant="contained" color="primary" onClick={()=>{
                    addRow()
                }}> +</Button>
            </TableContainer>
        </>
    );
}




// export default
export default FunGrade;
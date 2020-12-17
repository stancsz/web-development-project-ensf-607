import React, {useState} from 'react';

const FunGrade=()=> {

    return (
        <div className="FunGrade">
            {/*<h1> This is the Grade Section</h1>*/}
            <label className="label is-size-3 has-text-left pl-1">7. Final Grade Determination</label>
            <p align="left">The final grade in this course will be based on the following components:</p>
            <div align="center"><GradeTable/></div>
            <div class="content" align="left">
                <h5 className="subtitle" > Notes: </h5>
                <p> a) You must either achieve at least 50% on the final exam or achieve at least 50% on the weighted average of the midterm and final exam. You must also achieve an average of at least 50% on the lab section of the course. If you do not satisfy these caveats, you will not receive a passing grade. </p>
                <p> b) Circumstances beyond one’s control (e.g. sickness, etc.), leading to missing lab session and/or delays in assignment submissions should be discussed with the course instructor as soon as possible. Proper documentation must be provided.</p>
                <p> c) Conversion from a score out of 100 to a letter grade will be done using the conversion chart shown below. This grading scale can only be changed during the term if the grades will not be lowered.</p>
            </div>
            <div align="center"><LetterGradeTable/></div>
        </div>
    );
}


const GradeTable=()=> {
    const [rows, setRows] = useState([{num: 1, text: "Enter outcome"}])
    const [count, setCount] = useState(1)
    const addRow = () => {
        var x = rows[rows.length - 1].num
        let temp = {num: x, text: "Enter outcome"}
        rows.push({})
        rows.sort()
        setRows(rows)
    }
    const update = (num, txt) => {
        let newRows = rows.filter((row) => row.num !== num)
        let temp = {num: num, text: txt}
        newRows.push(temp)
        newRows.sort()
        var x = newRows[rows.length - 1].num
        let temp2 = {num: x + 1, text: "Enter outcome"}
        newRows.push(temp2)
        setRows(newRows)
    }

    return(
        <div className="column">
            <div className="table-container">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Number</th>
                        <th>Outcome</th>

                    </tr>

                    </thead>
                    <tbody>
                    {
                        rows.map((row)=>{
                            return (
                                <tr>
                                    <td id={row.num}>
                                        {count}
                                    </td>
                                    <td>
                                        <input type="text" placeholder={row.text} className={row.num}
                                        ></input>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <button type="button" onClick={()=>{
                    setCount(count+1)
                    update(document.getElementById(count.toString),document.getElementsByClassName(count.toString))
                    console.log(rows)}}>Add row</button>
            </div>
        </div>
    )
}


const LetterGradeTable=()=> {
    const [rows, setRows] = useState([{num: 1, text: "Enter outcome"}])
    const [count, setCount] = useState(1)
    const addRow = () => {
        var x = rows[rows.length - 1].num
        let temp = {num: x, text: "Enter outcome"}
        rows.push({})
        rows.sort()
        setRows(rows)
    }
    const update = (num, txt) => {
        let newRows = rows.filter((row) => row.num !== num)
        let temp = {num: num, text: txt}
        newRows.push(temp)
        newRows.sort()
        var x = newRows[rows.length - 1].num
        let temp2 = {num: x + 1, text: "Enter outcome"}
        newRows.push(temp2)
        setRows(newRows)
    }

    return(
        <div className="column">
            <div className="table-container">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Number</th>
                        <th>Outcome</th>

                    </tr>

                    </thead>
                    <tbody>
                    {
                        rows.map((row)=>{
                            return (
                                <tr>
                                    <td id={row.num}>
                                        {count}
                                    </td>
                                    <td>
                                        <input type="text" placeholder={row.text} className={row.num}
                                        ></input>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <button type="button" onClick={()=>{
                    setCount(count+1)
                    update(document.getElementById(count.toString),document.getElementsByClassName(count.toString))
                    console.log(rows)}}>Add row</button>
            </div>
        </div>
    )
}


export default FunGrade;
import React from 'react';

const FunGrade=()=> {
    return (
        <div className="FunGrade">
            {/*<h1> This is the Grade Section</h1>*/}
            <label className="label is-size-3 has-text-left pl-1">7. Final Grade Determination</label>
            <p>The final grade in this course will be based on the following components:</p>
            <p>
                <h5 className="subtitle"> Notes: </h5>
                <li> a) You must either achieve at least 50% on the final exam or achieve at least 50% on the weighted average of the midterm and final exam. You must also achieve an average of at least 50% on the lab section of the course. If you do not satisfy these caveats, you will not receive a passing grade. </li>

                <li> b) Circumstances beyond one’s control (e.g. sickness, etc.), leading to missing lab session and/or delays in assignment submissions should be discussed with the course instructor as soon as possible. Proper documentation must be provided.</li>

                <li> c) Conversion from a score out of 100 to a letter grade will be done using the conversion chart shown below. This grading scale can only be changed during the term if the grades will not be lowered.</li>
            </p>
        </div>
    );
}

export default FunGrade;
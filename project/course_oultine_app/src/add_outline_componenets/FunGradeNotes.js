import TextField from '@material-ui/core/TextField';
import { useState } from 'react';




function FunGradeNotes() {

    const [calculatorInfo, setCalculatorInfo] = useState();
    
    return(
        <>

        <TextField multiline fullWidth placeholder = "Enter Calculator Information. Example: Calculators are not allowed during examinations." 
        value={calculatorInfo} onInput={e => setCalculatorInfo(e.target.value)}>
        </TextField>

        </>
    );
}

export default FunCalculator;
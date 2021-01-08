import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";



function FunCalculator() {

    const [calculatorInfo, setCalculatorInfo] = useState();
    
    return(
        <>
        <div className="pt-2 pb-2" align="right">
            <Button variant="outlined" color="secondary">
              <SaveIcon />
            </Button>
          </div>

        <TextField multiline fullWidth placeholder = "Enter Calculator Information. Example: Calculators are not allowed during examinations." 
        value={calculatorInfo} onInput={e => setCalculatorInfo(e.target.value)}>
        </TextField>

        </>
    );
}

export default FunCalculator;
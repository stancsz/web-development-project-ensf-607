import React from 'react';
import Typography from '@material-ui/core/Typography';



export default function SearchCalculator(props) {

  return (
    <>
        <div align="left">
        <Typography>
          {props.calculator[0].UseCalc}
        </Typography>
        </div>

    </>
  );
}

import React from 'react';
import Typography from "@material-ui/core/Typography";



export default function SearchExaminations(props) {

  return (
    <>
    <Typography component={'span'}>
        <div align="left" dangerouslySetInnerHTML={ { __html: props.examinations[0] === undefined ? "Data Missing" : props.examinations[0].Examination} }></div>    
    </Typography>
    </>
  );
  
}

import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function SearchNote(props) {

    return (
        <>

        <div align="left">
        <b>
        Notes:
        </b>
        <Typography component={'span'}>
        <div align="left" dangerouslySetInnerHTML={ { __html: props.note[0] === undefined ? "Data Missing" : props.note[0].GradeNotes} }></div>    
        </Typography>
        </div>

        </>
    );
  
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function SearchExaminations(props) {
 //console.log(props.examinations[0].Examination)
  
  const classes = useStyles();

  return (
    <>
    <Typography component={'span'}>
        <div align="left" dangerouslySetInnerHTML={ { __html: props.examinations[0].Examination} }></div>    
    </Typography>
    </>
  );
}

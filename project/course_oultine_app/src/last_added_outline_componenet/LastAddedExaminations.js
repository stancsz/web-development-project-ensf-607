import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function SearchExaminations(props) {
 
  
  const classes = useStyles();

  return (
    <>
    <Typography variant="h7">
        <div dangerouslySetInnerHTML={ { __html: "Placeholder" } }></div>    
    </Typography>
    </>
  );
}

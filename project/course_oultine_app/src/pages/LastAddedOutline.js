import React, { useState } from 'react';
import Info from "../last_added_outline_componenet/LastAddedInfo"
import data from "../data/DataInfo.json"
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Paper from "@material-ui/core/Paper";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
const LastAdded = () => {
    const classes = useStyles();
    const [info, setInfo] = useState(data["ENSF-607-FALL-2020"]);
    return (
        <Container maxWidth="md">
            <Accordion defaultExpanded={true} elevation={5}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                        <label className="label is-size-3 has-text-left">1. Calendar Information</label>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{ width: '100%' }}>
                        <Paper className={classes.paper} elevation={3}>
                            <Info info={info} />
                        </Paper>
                    </div>
                </AccordionDetails>
            </Accordion>




        </Container>
    );
};
export default LastAdded;

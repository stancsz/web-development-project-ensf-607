import Typography from '@material-ui/core/Typography';


function SearchInfo(props) {


  return (
    <div className="FunInfo">

    <div className="field">
        

        <div align = "left">Course Number:</div>
        <div align="left">
        <Typography variant="h6">
        <span>&nbsp;&nbsp;</span>{props.info.courseID.split("-").slice(0,2).join(" ")} 
        </Typography>
        </div>

        <div align = "left">Course Name:</div>
        <div align="left">
        <Typography variant="h6">
        <span>&nbsp;&nbsp;</span>{props.info.courseName}
        </Typography>
        </div>

        <br/>
        <div align = "left">Course Info:</div>
        <div align="left">
        <Typography variant="h6">
        <div dangerouslySetInnerHTML={ { __html: props.info.courseInfo } }></div>
         
        </Typography>
        </div>

        <br/>
        <div align = "left">Course Hours:</div>
        <div align="left">
        <Typography variant="h6">
        {props.info.courseHours}
        </Typography>
        </div>
        
        <div align = "left">Academic Credit:</div>
        <div align="left">
        <Typography variant="h6">
        {props.info.academicCredit}
        </Typography>
        </div>

        <div align = "left">Calendar Reference:</div>
        <div align="left">
        <Typography variant="h6">
        <a href = {props.info.calendarReference}>{props.info.calendarReference}</a>
        </Typography>
        </div> 
    </div>
    </div>
  );
}

export default SearchInfo;

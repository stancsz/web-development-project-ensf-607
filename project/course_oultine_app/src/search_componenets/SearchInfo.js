import Typography from '@material-ui/core/Typography';


function SearchInfo(props) {

  return (
    <div className="FunInfo">

    <div className="field">
        
        <div align = "left">Course Number:</div>
        <div align="left">
        <Typography variant="h6">
        <span>&nbsp;&nbsp;</span>{props.info[0] === undefined ? "Data Missing" : props.info[0].CourseID.split("-").slice(0,2).join(" ")} 
        </Typography>
        </div>

        <div align = "left">Course Name:</div>
        <div align="left">
        <Typography variant="h6">
        <span>&nbsp;&nbsp;</span>{props.info[0] === undefined ? "Data Missing" : props.info[0].CourseName}
        </Typography>
        </div>

        <br/>
        <div align = "left">Course Description:</div>
        <div align="left">
        <Typography variant="h6">
        {props.description[0] === undefined ? "Data Missing" : props.description[0].CourseDescription}
        </Typography>
        </div>

        <br/>
        <div align = "left">Course Hours:</div>
        <div align="left">
        <Typography variant="h6">
        {props.info[0] === undefined ? "Data Missing" : props.info[0].CourseHours}
        </Typography>
        </div>
        
        <div align = "left">Academic Credit:</div>
        <div align="left">
        <Typography variant="h6">
        {props.info[0] === undefined ? "Data Missing" : props.info[0].AcademicCredit}
        </Typography>
        </div>

        <div align = "left">Calendar Reference:</div>
        <div align="left">
        <Typography variant="h6">
        <a href = {props.info[0] === undefined ? "javascript:void(0)" : props.info[0].CalenderRefrence}>{props.info[0] === undefined ? "Data Missing" : props.info[0].CalenderRefrence}</a>
        </Typography>
        </div> 
    </div>
    </div>
  );


}

export default SearchInfo;

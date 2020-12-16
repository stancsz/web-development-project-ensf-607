import "bulma/css/bulma.css";
import Button from '@material-ui/core/Button';
import { useState } from 'react';


import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';



const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDoc = ({courseNumberInput}, {courseNameInput}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
      <Text style = {{ color: 'black', fontSize: 22, textAlign: 'left'}}> </Text>
      </View>
    <View>
        <Text style = {{ color: 'black', fontSize: 22, textAlign: 'left'}}>1. Calendar Information</Text>
      </View>
      <View>
        <Text style = {{ color: 'white', backgroundColor : 'black', textAlign: 'left'}}>{courseNumberInput}</Text>
      </View>
      <View>
        <Text style = {{ color: 'white', backgroundColor : 'black', textAlign: 'left'}}>{courseNameInput}</Text>
      </View>

    </Page>
  </Document>
);


function FunInfo() {


    const [courseNumberInput, setCourseNumberInput] = useState();
    const [courseNameInput, setCourseNameInput] = useState();

    const [buttonText, setButtonText] = useState("Export as PDF");


    var courseInfoPlaceholderText = "Enter Course Information Here. Example: A survey of software design"
    + " and development topics for Engineering students. Topics include: key features of an object-oriented"
    + " programming language, especially inheritance and polymorphism; elements of object-oriented design;"
    + " programming and application of common data structures; strategies and tools for testing and debugging.";

  

  return (
    <div className="FunInfo">

    <br/>
      

    <div className="field">

        <br/>
        
        <label className="label is-size-3 has-text-left pl-1">1. Calendar Information</label>

        <div className="control">
            <input className="input is-size-4 has-text-left pl-1 mb-0 pb-0" 
            value={courseNumberInput} onInput={e => setCourseNumberInput(e.target.value)} 
            placeholder = "Enter Course Number. Example: ENSF 409"/>
        </div>
      
        <div className="control">
          <input className="input is-size-4 has-text-left pl-2 mt-0 pt-0" 
          value={courseNameInput} onInput={e => setCourseNameInput(e.target.value)} 
          placeholder = "Enter Course Name. Example: Principles of Software Development"></input>
        </div>
    
        <div className = "control">
            <textarea className="textarea is-info" placeholder = {courseInfoPlaceholderText} rows="4">
            </textarea>
        </div>

        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Course Hours:</div>
        <div className="column has-text-left">
            <div className="control">
                <input className="input" type="text" placeholder="Example: 3 units; H (3-2)"/>
            </div>
        </div>
        </div>
        
        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Academic Credit:</div>
        <div className="column has-text-left">
            <div className="control">
                <input className="input" type="text" placeholder="Example: 3"/>
            </div>
        </div>
        </div>

        <div className="columns">
        <div className="column is-one-quarter has-text-left pl-4 pt-4">Calendar Reference:</div>
        <div className="column has-text-left">
        
            <div className="control">
                <input className="input" type="text" 
                placeholder="Example: http://www.ucalgary.ca/pubs/calendar/current/software-engineering-for-engineers.html#38252"/>
            </div>


        </div>
        </div>

    </div>


    <Button variant="contained" onClick={() => 
      
      setButtonText(<PDFDownloadLink document={<MyDoc courseNumberInput = {courseNumberInput} 
      courseNameInput = {courseNameInput}/>} fileName="courseoutline.pdf">

      {({loading}) => (loading ? 'Loading document...' : 'Download Now')}
      </PDFDownloadLink>)
      
    }>{buttonText}
    </Button>

    </div>

  );
}

export default FunInfo;
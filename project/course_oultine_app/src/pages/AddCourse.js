import React from 'react';
import FunInfo from '../add_outline_componenets/FunInfo.js'
import FunGrade from '../add_outline_componenets/FunGrade'
import FunOutcome from '../add_outline_componenets/FunOutcome.js'

import Button from '@material-ui/core/Button';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { useState, useEffect } from 'react';

import {useSelector, useDispatch, Provider} from 'react-redux'
import { Link } from 'react-router-dom';



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
      <View>
        <Text style = {{ color: 'black', fontSize: 22, textAlign: 'left'}}>2. Learning Outcomes</Text>
      </View>

    </Page>
  </Document>
);






const AddCourse =()=>{    

    const [buttonText, setButtonText] = useState("Export as PDF");

    const [pdfLink, setPdfLink] = useState("")



    const [isReady, setIsReady] = useState(false);

    useEffect(()=> {
    setIsReady(true);
    },[]);


    
return (
  
<React.Fragment>
<h1>This is Add new course outline page</h1>
<FunInfo/>
<FunOutcome/>
<FunGrade/>


{isReady ? (
<div>
<Button variant="contained" color="default">
<PDFDownloadLink document={<MyDoc courseNumberInput = {FunInfo.courseNumberInput} 
        courseNameInput = {FunInfo.courseNameInput}/>} fileName="courseoutline.pdf">
  
        {({loading}) => (loading ? 'Loading document...' : 'Download Now')}
        </PDFDownloadLink>
        </Button>
        </div>
  

) : ("") 
}

</React.Fragment>


)

}
export default AddCourse
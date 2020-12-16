import "bulma/css/bulma.css";
import {useState} from "react";

function FunGrade() {
 
   // Component, Learning Outcome(s) Evaluated Weight

    const[row, setRow] = useState(0)



    const renderHeader = () => {
        let headers = ['Component', 'Learning Outcome(s) Evaluated', 'Weight']

        return headers.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }


    const getData = async () => {
      
        setRow('a')
    }


  return (
    <div className="FunOutcome">


    <div className="field">

        <br/>
        
        <label className="label is-size-3 has-text-left pl-1 mt-0 mb-0">7. Final Grade Determination</label>

        <label className="label is-size-5 has-text-left has-text-weight-normal pl-1 mb-0">
        The final grade in this course will be based on the following components:
        </label>



        <table id='gradeDetermination'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
               
        </table>

    </div>
    </div>

  );
}

export default FunGrade;
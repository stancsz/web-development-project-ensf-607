import React, { useState } from 'react';

const FunOutcome=()=> {
 
  const[ rows,setRows]=useState([{num:1,text:"Enter outcome"}])

  const [count,setCount]=useState(1)
  const addRow=()=>{
    var x=rows[rows.length-1].num
    let temp={num:x,text:"Enter outcome"}
    rows.push({})
    rows.sort()
    setRows(rows)
  }
  const update=(num,txt)=>{
    let newRows=rows.filter((row)=> row.num !== num)
    let temp={num:num , text:txt}
    newRows.push(temp)
    newRows.sort()
    var x=newRows[rows.length-1].num
    let temp2={num:x+1,text:"Enter outcome"}
    newRows.push(temp2)
    setRows(newRows)
   
    

  }
  
    return (
      <div className="column">
   
      
   <div className="table-container">
        <table className="table">
        <thead>
        <tr>
    <th>Number</th>
    <th>Outcome</th>

        </tr>

        </thead>
        <tbody>
          {
            rows.map((row)=>{
              return (
                <tr>
                <td id={row.num}>
                  {count}
                </td>
                <td>
                  <input type="text" placeholder={row.text} className={row.num} 
                   ></input>
                   
                </td>
                
              </tr>
              
    
              )
            })

           
          }
         
         
          
          
           
            
          
          
          
        </tbody>
        
        </table>
        <button type="button" onClick={()=>{
          setCount(count+1)
          update(document.getElementById(count.toString),document.getElementsByClassName(count.toString))
         
          
          console.log(rows)}}></button>
        </div>
        
   
      
      
    </div>
    );
  }
  
  export default FunOutcome;
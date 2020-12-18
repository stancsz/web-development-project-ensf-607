import React from 'react';
import InfoData from '../data/FunInfoData.json'
const FunInfo=()=> {
  const node1 = InfoData.CourseList.cousrseNum
  const node2=InfoData.Info.find((n)=> n['ENSF 607'])
    return (
      <div className="App">
        {console.log(node2['ENSF 607'].courseNum)}
        <h1> This is Info section</h1>
      </div>
    );
  }
  
  export default FunInfo;
  
import React from "react";
import SearchCourse from './SearchCourse'
import AddCourse from './AddCourse'
import Navbar from '../navigation/Navbar'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'


const Home = () => {
  return (
    <React.Fragment>

    
      <p>
        Welcome to Course outline app
        <br />
        Select an option from menu icon
      </p>
    </React.Fragment>
  );
};
export default Home;

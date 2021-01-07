
import './App.css';
import Home from './pages/Home'
import SearchCourse from './pages/SearchCourse'
import AddCourse from './pages/AddCourse'
import Navbar from './navigation/Navbar'
import LastAdded from './pages/LastAddedOutline'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
      
    
     <Router>
     <Navbar/>
       <Switch>
       <Route exact path="/">
        <Home/>
       </Route>
       <Route exact path="/Search">
        <SearchCourse/>
       </Route>
       <Route exact path="/AddCourse">
        <AddCourse/>
       </Route>
       <Route exact path ="/LastAdded">
         <LastAdded/>
       </Route>
       <Route path="*">
         <h1>Page not Found</h1>
       </Route>
       </Switch>
      </Router>
 
      </div>
      
    
    

    
  );
}

export default App;

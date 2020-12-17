
import './App.css';
import Home from './pages/Home'
import SearchCourse from './pages/SearchCourse'
import AddCourse from './pages/AddCourse'
import Navbar from './navigation/Navbar'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'


function App() {
  
  return (

    //<Provider store = {store}>
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
       <Route path="*">
         <h1>Page not Found</h1>
       </Route>
       </Switch>
      </Router>
 
      </div>
      
    //</Provider>
    
  );
}

export default App;

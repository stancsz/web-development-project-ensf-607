
import './App.css';
import Home from './pages/Home'
import SearchCourse from './pages/SearchCourse'
import AddCourse from './pages/AddCourse'
import Navbar from './navigation/Navbar'
import LastAdded from './pages/LastAddedOutline'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'


import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles((theme) => ({
  scrollUp: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },

}));


function ScrollTop(props) {
  
  const {children} = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({});
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Zoom in={trigger}>
      <div className={classes.scrollUp} onClick={handleClick}>
        {children}
      </div>
    </Zoom>
  );
}


function App(props) {
  
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

      
       <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      </div>    
  );
}

export default App;

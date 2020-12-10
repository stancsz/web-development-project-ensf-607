import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="text_field">

      <input type="text" placeholder="Put a number"/>
      <input type="button" id="Assign" value="Assign" />
      <h1 id="Counter" >Counter</h1>
      </div>
      <div className="up_down_btn">
      <input type="button"  value="Up" id="Up_btn"/>
      <input type="button" value="Down" id="Down_btn"/>
      
      </div>
      
         
      
     
   </div>
  );
}

export default App;

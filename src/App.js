import React from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/hompage/homepage.components";

const HatsPage = (props) => {
  console.log(props)
  return(
    <div>
      <h1>HATS PAGE</h1>
      <button onClick={() => props.history.push('/')}>back home</button>
    </div>
  )
}

function App() {
  return (
    <div>
        <Route exact={true} path='/' component={HomePage}/>
        
        <Route exact={true} path='/hats' component={HatsPage}/>
        
    </div>
  );
}

export default App;

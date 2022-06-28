import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import CreateNote from './components/CreateNote'
import UpdateNote from './components/UpdateNote'
import About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Nav/>
      
       
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/new">
            <CreateNote/>
          </Route>
          <Route path="/edit">
            <UpdateNote/>
          </Route>
         
        </Switch>
      
      
   </div>
  );
}

export default App;

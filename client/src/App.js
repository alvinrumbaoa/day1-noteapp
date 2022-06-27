import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import CreateNote from './components/CreateNote'
import UpdateNote from './components/UpdateNote'
import About from './components/About'
import { Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Nav/>
       
       <Routes>
         <Route path="/" element={Home}/>
         <Route path="/about" element={About}/>
         <Route path="/new" element={CreateNote}/>
         <Route path="/edit" element={UpdateNote}/>
       </Routes>
   </div>
  );
}

export default App;

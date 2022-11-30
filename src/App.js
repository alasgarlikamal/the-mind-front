import Auth from "./Components/auth";
import Cards from "./Components/Cards.js"
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
function App() {
  return (
    <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/Auth' element={<Auth />}></Route>
                 <Route exact path='/About' element={<Cards />}></Route>
          </Routes>
          </div>
       </Router>
  )
  
}

export default App;

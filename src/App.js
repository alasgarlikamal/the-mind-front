import Auth from "./Components/auth";
import Cards from "./Components/Cards";
import Waiting from "./Components/Waiting";
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
function App() {
  return (
    <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/auth' element={<Auth />}></Route>
                 <Route exact path='/about' element={<Cards />}></Route>
                 <Route exact path="/waiting" element={<Waiting />}></Route>
          </Routes>
          </div>
       </Router>
  )
  
}

export default App;

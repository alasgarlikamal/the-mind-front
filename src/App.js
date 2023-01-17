import Auth from "./Components/Auth/Auth";
import Cards from "./Components/About/Cards";
import ProfileUpdate from './Components/ProfileUpdate/ProfileUpdate'
import WaitingRoom from './Components/WaitingRoom/WaitingRoom';
import Lobby from './Components/Lobby/Lobby'
import Error from './Components/ErrorPage/Error'
import Statistics from './Components/Statistics/Statistics'
import Votekick from "./Components/Votekick/Votekick";
import Disconnected  from "./Components/Disconnected/Disconnected";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/auth" element={<Auth />}></Route>
          <Route exact path="/about" element={<Cards />}></Route>
          <Route exact path="/settings" element={<ProfileUpdate />}></Route>
          <Route exact path="/lobby" element={<Lobby />}></Route>
          <Route exact path="/waiting" element={<WaitingRoom />}></Route>
          <Route exact path="/404" element={<Error />}></Route>
          <Route exact path="/statistics" element={<Statistics />}></Route>
          <Route exact path="/votekick" element ={<Votekick />}></Route>
          <Route exact path="/Disconnected" element ={<Disconnected />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

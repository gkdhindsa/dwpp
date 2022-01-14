import React from 'react';
import NotFound from './NotFound';
import Home from './Home';
// import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path= "/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

    </Router>
  )
}

export default App;

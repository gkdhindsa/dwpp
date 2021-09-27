import React from 'react';
import Signup from './Signup';
import Dashboard from './Dashboard';
import {Container} from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
  
      <Container className="flex-box align-items-center justify-content-center">
        <Router>
 
          <Routes>
            <Route exact path="/" component='Dashboard'/>
            <Route path="/signup" component='Signup'/>

          </Routes>
      
        </Router>
      <Signup/>
      </Container>

    
    
  )
}

export default App;

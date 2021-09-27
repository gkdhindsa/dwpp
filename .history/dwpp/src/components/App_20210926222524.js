import React from 'react';
import Signup from './Signup';
import {Container} from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <AuthProvider>
      <Container className="flex-box align-items-center justify-content-center">
        <Router>
          Switch
        </Router>
      <Signup/>
      </Container>
    </AuthProvider>
    
    
  )
}

export default App;

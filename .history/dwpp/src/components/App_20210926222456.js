import React from 'react';
import Signup from './Signup';
import {Container} from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext';
import {BrowserRouter as Router, Switch}

function App() {
  return (
    <AuthProvider>
      <Container className="flex-box align-items-center justify-content-center">
      <Signup/>
      </Container>
    </AuthProvider>
    
    
  )
}

export default App;

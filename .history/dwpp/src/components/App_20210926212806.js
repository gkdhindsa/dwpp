import React from 'react';
import Signup from './Signup';
import {Container} from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      
    </AuthProvider>
    <Container className="flex-box align-items-center justify-content-center">
      <Signup/>
    </Container>
    
  )
}

export default App;

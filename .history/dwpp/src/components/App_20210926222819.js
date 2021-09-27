import React from 'react';
import Signup from './Signup';
import Dashboard from './Dashboard';
import {Container} from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
  
      <Container className="flex-box align-items-center justify-content-center">
        <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component='Dashboard'></Route>
            <Route path="/signup" component='Signup'/>

          </Switch>
          </AuthProvider>
        </Router>
      <Signup/>
      </Container>

    
    
  )
}

export default App;

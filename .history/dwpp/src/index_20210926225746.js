import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AuthProvider } from './contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


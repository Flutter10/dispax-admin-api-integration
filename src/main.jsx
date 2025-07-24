import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';
import './index.css'
import { HashRouter } from 'react-router-dom';
import { AuthProvider } from './components/ApiController/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider>
  <HashRouter>
        <App />
    </HashRouter>
    </AuthProvider>

);



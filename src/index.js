import 'antd/dist/antd.css'
import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth.jsx';
import App from './app.js';
import './index-style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <AuthProvider>
          <div className='body'>
            <App />
          </div>
      </AuthProvider>
    </BrowserRouter>
);

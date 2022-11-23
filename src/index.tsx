import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Modules
import App from './app';
import { PageContent } from './pages/page-content';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/spotify-colorcode.css';
import './css/index.css';

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { DatabasePage } from './pages/database-page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
        <Route path='' element={
          <PageContent />
        }></Route>
          <Route path='/database' element={
            <DatabasePage />
        }></Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieContextProvider from './context/MovieContext';
import ThemeContextProvider from './context/ThemeContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieContextProvider>
      <ThemeContextProvider>
        <Router>
          <App />
        </Router>
      </ThemeContextProvider>
    </MovieContextProvider>
  </React.StrictMode>
);

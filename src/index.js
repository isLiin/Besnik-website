import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import ThisHeader from './Header';
import ThisContent from './Content';
import ThisFooter from './Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThisHeader></ThisHeader>
    <ThisContent></ThisContent>
    <ThisFooter></ThisFooter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

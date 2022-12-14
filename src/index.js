import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import Div1 from './Div1';
import Vito from './Vito';

import Footer from './Footer';
import Rfc from './Rfc';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Navbar></Navbar>
    <Div1></Div1>
    <Vito></Vito>
    
    
    <Footer></Footer>
    <Rfc></Rfc>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

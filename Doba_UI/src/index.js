// index.js
import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import { Highprofit } from './components/Highprofit';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  // <Highprofit/>,
  document.getElementById('root')
);

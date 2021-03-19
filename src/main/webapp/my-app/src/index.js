import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Components/Header/Header'
import MainPage from './Components/MainPage/MainPage'
import Footer from './Components/Footer/Footer'
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"; 

const routing = (
  <Router>
    <div>
    <Route exact path="/" component={App} />
      {/* <Route exact path="/recognition" component={RecognitionPage} />
      <Route exact path="/register" component={DataTrainPage} />
      <Route exact path="/admin" component={AdminPanel} />
      <Route exact path="/project" component={App} /> */}
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
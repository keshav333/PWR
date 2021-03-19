import React from 'react'
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import MainPage from './Components/MainPage/MainPage';
import HomePage from './Components/HomePage/HomePage';
import Producer from './Components/Producer/Producer';
import Wholesaler from './Components/Wholesaler/Wholesaler';
import Retailer from './Components/Retailer/Retailer';

class App extends React.Component{
 
  render(){
    return(
      <div>
       
        <Router>
          <div>
          <Route exact path="/" render={() => <HomePage />} />
            <Route exact path="/producer" render={() => <Producer /> } />
            <Route exact path="/wholesaler" render={() => <Wholesaler />} />
            <Route exact path="/retailer" render={() => <Retailer  />} />
            
          </div>
        </Router>
        
      </div>
    )
  }
}

export default App;

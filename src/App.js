import React from 'react';
import './App.css';

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Rate from './Rate/Rate'
import About from './About/About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component{
  render(){
    return (
      <div>
          <Header />
        <div className="conteiner white">
                <main>
                  <Router>
                    <Switch>
                      <Route exact path='/' component={Rate}></Route>
                      <Route exact path='/about' component={About}></Route>
                    </Switch>
                  </Router>
                   
                 </main>

            <div id="coocie_info">
                <div className="site-conteiner">
                    <div className="well">
                        нажми на меня . &nbsp;
                        <button className="btn">ok</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />

        
      </div>
    );
  }}
  
  export default App;
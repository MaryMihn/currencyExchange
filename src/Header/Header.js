import React from 'react';
import './Header.css';

import Nav from '../Nav/Nav.js'

class Header extends React.Component{
  render(){
    return (
      
        <header>
            <div className ="top-bar"></div>
            <div className ="main-header">
                <div className="conteiner">
                    <h1 className ="site-title">Обмен Валют</h1>
                </div>
            </div>
            <Nav />
        </header>

        
    );
  }}
  
  export default Header;
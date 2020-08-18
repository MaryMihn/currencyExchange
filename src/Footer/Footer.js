import React from 'react';

import './Footer.css';

class Footer extends React.Component{
  render(){
    return (
        <footer id="footer" className="footer">
            <div className="footer-bottom">
                <div className="conteiner">
                    <div className="flex-conteiner">
                        <div className="flex-item">
                            <h1 className="footer-title"><a href="#">Обмен Валют</a></h1>
                            <p>All Reserved</p>
                        </div>
                            <div> 
                                <div className="flex-item">
                                    <div className="modul-body">
                                        <ul className="list-unstyled">
                                            <li><a href="/c" >Карта сайта</a></li>
                                            <li><a href="/d">Google </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div> 
                                <div className="flex-item">
                                    <div className="modul-body">
                                        <ul className="list-unstyled">
                                            <li><a href="/contact">контакты</a></li>
                                            <li><a href="/d">Гарантии</a></li>
                                            <li><a href="/s">О сервисе</a></li>
                                            <li><a href="/o">Условия возврата</a></li>
                                            <li><a href="/p">Соглашения о использовании сервиса</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="copyring-bar">
                        <div className="flex-conteiner">
                            <div className="flex-item">
                                <ul className='link'></ul>
                            </div>
                            <div className="flex-item">
                                <div className="clearfix">
                                    <ul>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

      
    );
  }}
  
  export default Footer;
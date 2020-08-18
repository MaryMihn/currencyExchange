import React from 'react';

import '../Rate/Rate.css';
import Calk from '../Calk/Calk'

class Rate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            'date': '' ,
            'currencyRate' : {},
        }
        this.currency = ['USD', 'RUB', 'CAD', 'PHP']
    }
    componentDidMount(){
        this.getRate();
    }

    getRate = () => {
        fetch('https://api.exchangeratesapi.io/latest')
            .then (data => {
                return data.json();
                })
            .then (data => {
                this.setState({ date:data.date })
                let result = {}
                for(let i = 0; i< this.currency.length; i++){
                    result[this.currency[i]]=data.rates[this.currency[i]]
                }
                this.setState({ currencyRate:result })
            });
    }

  render(){
      return(
    <div>
        <h3>Курс валют на {this.state.date}</h3>
        <div className="flex-conteiner">
            {Object.keys(this.state.currencyRate).map((keyName, i) => (
                <div className="block-flex" key={keyName}>
                    <div className="currency-name">{keyName}</div>
                    <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)} *</div>
                    <p className="currency-for">* можно купить за 1 EUR</p>
            </div>
            ))}
        </div>
        <Calk rate ={this.state.currencyRate}/>
    </div>
    );
  }}
  
  export default Rate;
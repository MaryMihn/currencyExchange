import React from 'react';

import '../Rate/Rate.css';

class Calk extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result : 0
        }
        
    }

    static getDerivedStateFromProps(props, state){
        return{rate: props.rate};
    }

    calkRate =(e)=>{
        e.preventDefault();
        let elements = e.target.elements
        let countCurrency = elements['count'].value
        let typeCurrency = elements['currency'].value
        this.setState({ result:(countCurrency/this.state.rate[typeCurrency]).toFixed(2)})
    }

    

  render(){
      return(
          <div>
            <h3>Калькулятор обмена</h3>
                <div className="block-flex-big">
                    <div>
                        <form onSubmit={this.calkRate}>
                        <input type="number" defaultValue="150" name='count'/>
                        <select name="currency" id="">
                        {Object.keys(this.props.rate).map((keyName, ) => (
                            <option key ={keyName}>{keyName}</option>
                        ))} 
                        </select>
                        <input type='submit' value='Calk' />
                        </form>
                    </div>
                    <div className="calc-res">
                        <h4>Результат</h4>
                        <ul >
                        <li>EUR {this.state.result}</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
    );
  }}
  
  export default Calk;
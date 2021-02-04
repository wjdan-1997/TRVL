import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counter: [
            {id:0,value:4},
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0},
            

        ]
      };
handleIncrement = parameter => {
    const counter = [...this.state.counter];
    const index = counter.indexOf(counter);
    counter[index] = {...counter}
    counter[index].value ++;
    this.setState({counter})
    console.log(parameter,'push_Increment',counter)
}
handleReset = ()=>{
const counter = this.state.counter.map(c => {c.value=0; return c;});
this.setState({counter})
console.log('Reset clicked', counter)
}

handleDelete= counterID =>{
    console.log('push_Delete' ,counterID)
    const counter = this.state.counter.filter(c => c.id !== counterID);
    this.setState({counter});
}  
totalCounters () {
    const lol = this.state.counter.filter(c=> c.value >0 ).length; 
     console.log('lool')
     return lol ;
  
}

    render() { 
        return ( 
        <div>
        <span className="badge badge-pill badge-secondary" 
        >
        span{this.totalCounters}
        </span>
        <button onClick={this.handleReset}
        className="btn btn-primary btn-sm m-3">
        Reset</button>

         {this.state.counter.map(counter => 
         <Counter 
         
         key={counter.id} 
         onDelete={this.handleDelete}
         counter={counter}
         onIncrement={this.handleIncrement}
         >
      
        </Counter>
       
         )}
         
        </div> );
    }
    
}
 
export default Counters;
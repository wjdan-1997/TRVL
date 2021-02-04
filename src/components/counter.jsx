import React, { Component } from 'react';
import {Button} from './Buttun'
import '../App.css'
import { Link } from 'react-router-dom';
import Products from './pages/Products';
//class 
class Counter extends Component {
//     state={
//        value: this.props.value,
//        numbers: [],
//        imageUrl: 'https://picsum.photos/333',
       
//    };
//    constructor(){
//        super()
//        this.handle_Increment = this.handle_Increment.bind(this);
//        console.log("work", this)

//    }
    render() {
    // render method is going to be called 
    // this method will return a new React element: 
    // element is <Div> and has tow child is <span> <button> 
    let classes = this.getBadgeClasses();
    return ( 
    <div className="counter_Section"> 
      {this.props.children}
    {/* <h1>Test</h1> */}
    {/* <span>{this.getnumbers()}</span> */}
    {/* <span>{this.props.counter.value === 0 && 'Please Add Number'} </span> */}
    {/* <img src={this.state.imageUrl}></img> */}
    <span className={classes}>{this.formatCount()}</span>   

    <button onClick={ ()=> this.props.onIncrement(this.props.counter)} 
    className="btn btn-secondary btn-sm m-3">Increment
    </button>
    
    <button onClick={()=>this.props.onDelete(this.props.counter.id)} 
    className="btn btn-danger btn-sm m-3">Delete
    </button>
    </div>


    );
    }
    // method  
    handle_Increment= () =>{
  //  this method setState inherent from Component class 
   // and it's tell react taht we're updating the state 
    //and then it will figure out  what part the state is changed
    //and based on that it will bring the Dom is sync with virtual Dom 
 
    this.setState({value:this.state.value +1})
   console.log('worked',this.state.value)
    } 
    // method 
    handel_Delete =()=>{
        this.setState({value: this.state.value -1})
        
        console.log('Deleted')
    }
    // method 
    getBadgeClasses = ()=> {
    let classes = "badge m-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
    }
   
    // method
    formatCount(){
        let {value} = this.props.counter; 
        // if and else 
        return value === 0 ? 'Zero' : value;
    }
    // method
     getnumbers (){
        if (this.state.numbers.length === 0) return <p>There are no numbers !</p>;
        return <ul>{this.state.numbers.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
   
}
 
export default Counter;
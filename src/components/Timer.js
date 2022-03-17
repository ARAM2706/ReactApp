import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component{

    constructor(props){
      super(props);
      this.state = {seconds: 0};
    }
  
    tick(){
      this.setState(state => ({ seconds : state.seconds + 1}));   
      
    }
  
    componentDidMount(){  
      this.interval = 
        setInterval(()=>this.tick(), 1000);
  
    }
  
    render(){
      return(
        <div className='container-fluid'>
          <h2>Timer</h2>
          Segundos: {this.state.seconds}
        </div>
      );
    }
  }




export default Timer;
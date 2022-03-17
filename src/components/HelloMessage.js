import React from 'react';
import ReactDOM from 'react-dom';

const varia = "Perro";

class HelloMessage extends React.Component {
    
    render() {
      return (
        <div className='container-fluid'>
          <h2>HelloMessage</h2>
          Hola {this.props.name}
          <br/>
          Me siento {this.props.estadoAnimo}
          {varia}
        </div>
      );
    }
  }
  
  

  export default HelloMessage;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  render() {
    return (
      <div className='container'>
        <h2>TODOApp</h2>
      <h3>Tareas pendientes</h3>
      <TodoList items={this.state.items} />
      <form onSubmit={this.handleSubmit}>
        <div className='row mx-3 my-3'>
          <label className='form-label' htmlFor="new-todo">
            ¿Qué se necesita hacer?
          </label>
        </div>
        <div className='row mx-3 my-3'>
          <input className='form-input'
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
        </div>
        <div className='row mx-3 my-3'>
          <button className='btn btn-primary'>
            Añadir #{this.state.items.length + 1}
          </button>
        </div>
        </form> 
      </div>

    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });   
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  
  }
}
class TodoList extends React.Component {
  render() {
    return (
        
      <ul>
      {this.props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>

    );
  }
}


export default TodoApp;
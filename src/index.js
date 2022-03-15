import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Card } from 'reactstrap';
import ReactDOM from 'react-dom';


class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    render() {
        return ( <
            Card body color = "info"
            align = "center"
            inverse >
            <
            div >
            <
            h3 > Tareas pendientes < /h3> <
            TodoList items = { this.state.items }
            /> <
            form onSubmit = { this.handleSubmit } >
            <
            input id = "new-todo"
            onChange = { this.handleChange }
            value = { this.state.text }
            placeholder = "¿Qué Desea Ingresar?" /
            >
            <
            Button outline color = "primary" >
            Añadir# { this.state.items.length + 1 } <
            /Button> < /
            form > <
            /div> < /
            Card >
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

            <
            ul > {
                this.props.items.map(item => ( <
                    li key = { item.id } > { item.text } < /li>
                ))
            } <
            /ul>

        );
    }
}

ReactDOM.render( <
    React.StrictMode >
    <
    TodoApp / >
    <
    /React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
import React from 'react';
import Todos from './Todos';
import TodoStore from "./stores/todoStore";
import * as TodoActions from "./actions/action";
export default class TodoList extends React.Component {
    constructor() {
        super()
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: TodoStore.getAll()
        }
    }
    componentWillMount() {        
        TodoStore.on("change", this.getTodos);
        console.log("count", TodoStore.listenerCount("change"));
    }
    componentWillUnmount(){
        TodoStore.removeListener("change",this.getTodos);
    }
    getTodos() {
        this.setState({
            todos: TodoStore.getAll()
        })
    }
    createTodo() {
        TodoActions.createTodo(Date.now());
    }
    reloadTodos() {
        TodoActions.reloadTodos();
    }


    render() {

        return (
            <div className="container">
                <button onClick={this.createTodo.bind(this)}>Add</button>
                <button onClick={this.reloadTodos.bind(this)}>ReLoad</button>
                <h1>Hello</h1>
                {
                    this.state.todos.map((answer) => {
                        console.log("Entered");
                        // Return the element. Also pass key     
                        return (<Todos text={answer} />)
                    })
                }
            </div >
        );
    }
}
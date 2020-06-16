import { EventEmitter } from 'events';
import dispatcher from '../dispatchers/dispatcher';
import { act } from 'react-dom/test-utils';
class TodoStore extends EventEmitter {
    constructor() {
        super()
        this.todos = [
            {
                id: 1,
                text: "Go Shoping",
                completed: false
            },
            {
                id: 2,
                text: "Pay Water Bill",
                completed: false
            }
        ]
    }
    getAll() {
        return this.todos;
    }
    createTodo(text) {
        const id = Date.now();
        this.todos.push({
            id,
            text,
            completed: false            
        });
        this.emit("change");
    }
    handleAction(action) {
        switch (action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text)
            }
            case "RECEIVE_TODO": {
                this.todos = action.data;
                this.emit("change");
            }
        }
        console.log("Todo store recived an action", action);
    }
}
const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;
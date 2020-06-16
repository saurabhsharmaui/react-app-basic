import dispatcher from "../dispatchers/dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text
    })
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id
    })
}

export function reloadTodos(text) {
    dispatcher.dispatch({
        type: "FETCHING_TODO"
    });
    setTimeout(() => {
        dispatcher.dispatch({
            type: "RECEIVE_TODO",
            data: [{
                id: 1,
                text: "Go Shoping Again",
                completed: false
            },
            {
                id: 2,
                text: "Pay Phone Bill",
                completed: false
            }]
        });
        if (false) {
            dispatcher.dispatch({
                type: "FETCHING_TODO_ERROR"
            });
        }
    }, 10000)
}


const baseUrl = 'http://localhost:8080/todos'

export const loadTodos = () => {
    return fetch(baseUrl)
        .then(res => res.json())
}

export const createTodo = (todo) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(todo)
    }).then(res => res.json())
}

export const saveTodo = (todo) => {
    return fetch(`${baseUrl}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(todo)
    }).then(res => res.json())
}

export const destroyTodo = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

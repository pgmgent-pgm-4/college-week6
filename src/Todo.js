import React, { useState } from 'react'

const Todo = () => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);

    const handleInputChange = (e) => {
        setText(e.target.value);
    }

    const handleFormSubmit = (e) => {
        // Todo state updaten
        e.preventDefault();

        if (!text.length) return;

        const newTodo = {
            val: text,
            id: Date.now()
        }

        setTodos(todos.concat(newTodo));
        setText('');
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="todo-input">
                    Enter your todo's:
                </label>

                <br/>

                <input id="todo-input" value={text} onChange={handleInputChange} />
                <button>Add todo</button>
            </form>

            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.val}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo
